/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#4285F4",
        "primary-active": "#3B78DC",
        "primary-light": "#D9E7FD",
        secondary: "#FBBC05",
        "secondary-active": "#E2A905",
        "secondary-light": "#FEF2CD",
        danger: "#EA4335",
        "danger-active": "#D33C30",
        "danger-light": "#FBD9D7",
        success: "#34A853",
        "success-active": "#2F974B",
        "success-light": "#D6EEDD",
        "white-active": "#F5F8FA",
        dark: "#181C32",
        heading: "#3F4254",
      },
      boxShadow: {
        "service-items": "0px 8px 14px 0px rgba(15, 42, 81, 0.08)",
      },
    },
  },
  plugins: [],
};
