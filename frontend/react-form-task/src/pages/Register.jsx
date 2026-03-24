import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemas } from "../validation/registerSchemas";
import FormController from "../components/FormController";
import axios from "axios";

const Register = ({ onSwitchToLogin }) => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const methods = useForm({
    resolver: yupResolver(schemas[step]),
    mode: "onTouched",
  });

  const { handleSubmit, trigger, getValues } = methods;

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) {
      setStep(prev => prev + 1);
      setApiError("");
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setApiError("");
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError("");
    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", data, { 
        withCredentials: true 
      });
      
      if (response.data.success) {
        alert("Registration successful! Please login to continue.");
        setStep(0);
        methods.reset();
        onSwitchToLogin?.();
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Registration failed";
      setApiError(errorMessage);
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-600">Step {step + 1} of 3</p>
              
              {/* Progress Bar */}
              <div className="flex gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      i <= step ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Error Message */}
            {apiError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{apiError}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <FormController 
                      label="Full Name"
                      name="name" 
                      type="text" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <FormController 
                      label="Email Address"
                      name="email" 
                      type="email" 
                      placeholder="you@example.com" 
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <FormController 
                      label="Password" 
                      name="password" 
                      type="password" 
                      placeholder="Enter a strong password"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Must contain: uppercase, lowercase, number, special character (!@#$%^&*)
                    </p>
                  </div>
                  <div>
                    <FormController 
                      label="Age" 
                      name="age" 
                      type="number"
                      placeholder="18"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <FormController 
                    name="agree" 
                    type="checkbox"
                    label="I accept the terms and conditions and privacy policy"
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6">
                {step > 0 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="flex-1 py-3 px-4 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200"
                  >
                    Back
                  </button>
                )}
                
                {step < 2 && (
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="flex-1 py-3 px-4 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Next
                  </button>
                )}
                
                {step === 2 && (
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg ${
                      isLoading 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-green-600 hover:bg-green-700 hover:shadow-xl"
                    }`}
                  >
                    {isLoading ? "Creating Account..." : "Complete Registration"}
                  </button>
                )}
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-600">Already have an account? 
                <button 
                  onClick={onSwitchToLogin}
                  className="ml-2 text-indigo-600 font-semibold hover:text-indigo-700 hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Register;