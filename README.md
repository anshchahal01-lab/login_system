<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
=======
# login_system
fter login, it becomes a proper dashboard with profile, authentication status, JWT token, activity log, statistics, role, user ID, online status and logout
>>>>>>> origin/main
## SecureAuth Login System

A React login demo with a protected dashboard, a simulated JWT-style token saved in browser local storage, and a role display.

## Run locally

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the local URL printed by Vite.

## Demo credentials

- Username: `admin`
- Password: `1234`

After login, the dashboard displays the user ID, role, token status, and profile information. Use **Logout** to clear the saved token and return to the login screen.

> This is an educational frontend-only simulation. The token is base64-encoded, not cryptographically signed, and local storage is not secure for production credentials. Use a backend authentication service for real applications.
