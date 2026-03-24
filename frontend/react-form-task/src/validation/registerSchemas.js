import * as yup from "yup";

export const step1Schema = yup.object({
  name: yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces")
    .required("Name is required"),
  email: yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

export const step2Schema = yup.object({
  password: yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[!@#$%^&*]/, "Password must contain at least one special character (!@#$%^&*)")
    .required("Password is required"),
  age: yup.number()
    .typeError("Age must be a number")
    .min(18, "You must be at least 18 years old")
    .max(120, "Please enter a valid age")
    .required("Age is required"),
});

export const step3Schema = yup.object({
  agree: yup.boolean()
    .oneOf([true], "You must accept the terms and conditions to proceed"),
});

export const loginSchema = yup.object({
  email: yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const schemas = [step1Schema, step2Schema, step3Schema];