import type { Config } from "tailwindcss";

// Tailwind is used only by the standard footer shared with the other Yugty sites.
// Preflight is off so it cannot disturb the homepage's own CSS.
const config: Config = {
  // Utilities are scoped under #yugty-footer so this site's own page-level CSS cannot override them.
  important: "#yugty-footer",
  content: ["./components/standard-footer/**/*.{ts,tsx}"],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: "#FF6A2F", light: "#FFEADB", lighter: "#FFF5EE", dark: "#D44F1A", deep: "#9C3A11" },
        ink: { DEFAULT: "#1A1A1A", 2: "#333333", 3: "#525252", 4: "#8A8A8A", 5: "#B8B8B8" },
      },
    },
  },
  plugins: [],
};
export default config;
