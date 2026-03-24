Problem Statement
You are required to build a Stepper Form system using React. The form must use a reusable
FormController component that dynamically renders different input types based on props.
Additionally, implement a secure authentication system using Access Tokens and Refresh Tokens.
Part 1: Stepper Form with Form Controller
Requirements:
• Create a reusable FormController component.
• The component must render inputs based on the type prop.
• Supported types: text, email, password, number, file, select, checkbox.
• FormController must integrate with a form library (React Hook Form or Formik).
• Validation must be handled using Zod or Yup.
• FormController should accept additional props like placeholder, accept, options, etc.
Example Usage:
<form>
<FormController name="email" type="email" placeholder="Enter email" />
<FormController name="password" type="password" />
<FormController name="profileImage" type="file" accept="image/png" />
</form>
Stepper Requirements:
• Minimum 3 steps.
• Each step should validate before moving forward.
• Show validation errors per step.
• Final step submits consolidated form data.
Part 2: Authentication System
Requirements:
• Implement login and protected routes.
• Use Access Token and Refresh Token strategy.
• Access token should be short-lived.
• Refresh token should be securely stored (HTTP-only cookie preferred).
• Implement token refresh logic on expiration.
• Protect API routes using middleware.
Security Expectations:
• Password hashing using bcrypt.
• Proper HTTP status codes.
• No sensitive data stored in localStorage except access token if needed.
• Handle token expiration gracefully.
Bonus (Optional)
• Add unit validation for FormController.
• Persist stepper form state.
• Explain how you would scale authentication.
Evaluation Criteria
• Reusability and component design.
• Validation and error handling.
• Authentication logic and security awareness.
• Code readability and structure.
