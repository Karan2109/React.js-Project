import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  colors: {
    gray: "#5A5959",
    yellow: "#FFEAAE",
    orange: "#F6820C",
    "dark-yellow": "#FCCA3F",
  },
});
