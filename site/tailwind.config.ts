import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--cream-rgb) / <alpha-value>)",
        "cream-deep": "rgb(var(--cream-deep-rgb) / <alpha-value>)",
        ivory: "rgb(var(--ivory-rgb) / <alpha-value>)",
        espresso: "rgb(var(--espresso-rgb) / <alpha-value>)",
        "espresso-soft": "rgb(var(--espresso-soft-rgb) / <alpha-value>)",
        beige: "rgb(var(--beige-rgb) / <alpha-value>)",
        "beige-deep": "rgb(var(--beige-deep-rgb) / <alpha-value>)",
        caramel: "rgb(var(--caramel-rgb) / <alpha-value>)",
        bread: "rgb(var(--bread-rgb) / <alpha-value>)",
        gold: "rgb(var(--gold-rgb) / <alpha-value>)",
        sage: "rgb(var(--sage-rgb) / <alpha-value>)",
        tomato: "rgb(var(--tomato-rgb) / <alpha-value>)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        ar: ["var(--font-cairo)", "system-ui", "sans-serif"],
        "ar-display": ["var(--font-alexandria)", "var(--font-cairo)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(46, 33, 26, 0.18)",
        "soft-lg": "0 24px 60px -20px rgba(46, 33, 26, 0.28)",
        card: "0 6px 24px -10px rgba(46, 33, 26, 0.20)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
