import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/registerSchemas";
import FormController from "../components/FormController";
import axios from "axios";

const Login = ({ onSwitchToRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError("");
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", data, { 
        withCredentials: true 
      });
      
      if (response.data.success) {
        alert("Login successful!");
        // Store token in localStorage
        localStorage.setItem("accessToken", response.data.accessToken);
        methods.reset();
        // Redirect or perform further actions
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Login failed";
      setApiError(errorMessage);
      console.error("Login error:", error);
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
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            {/* Error Message */}
            {apiError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-medium">{apiError}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <FormController 
                  label="Email Address"
                  name="email" 
                  type="email" 
                  placeholder="you@example.com" 
                />
              </div>

              <div>
                <FormController 
                  label="Password" 
                  name="password" 
                  type="password" 
                  placeholder="Enter your password"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg ${
                  isLoading 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl"
                }`}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-600">New to our platform?</span>
              </div>
            </div>

            {/* Register Link */}
            <button 
              type="button"
              onClick={onSwitchToRegister}
              className="w-full py-3 px-4 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-all duration-200"
            >
              Create an Account
            </button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Having trouble signing in? 
              <a href="#" className="ml-1 text-indigo-600 font-semibold hover:text-indigo-700">
                Get help
              </a>
            </p>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default Login;
