import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        // Brand/Theme
        background: "#ffffff",
        foreground: "#171717",
        textPrimary: "#1C252E",
        textSecondary: "#637381",
        textDisabled: "#919EAB",
        brandBlue: "#0373F3",
        // Status
        errorDark: "#B71D18",
        errorDarker: "#7A0916",
        warningLight: "#FFD666",
        warningMain: "#FFAB00",

        // UI/Accent
        hover: "#F5F5F5",
        highlight: "#0373f3",
        sidebarBg: "#F4F6F8",
        sidebarBorder: "#0D57C6",
        sidebarText: "#024897",
        buttonText: "#013065",
        buttonBg: "#025FCA",
        buttonBgLight: "#E6F1FF",
        promoYellow: "#FACA4A",
        bannerNavBg: "#CDE4FE",
        borderAlpha: "#919EAB3D",
        gradientFrom: "#0D57C6",
        gradientVia: "#37CFFF",
        gradientTo: "#0F5ED6",
        white: "#FFFFFF",
        gray500: "#6B7280",
        gray700: "#374151",
        blue50: "#EFF6FF",
        svgMask: "#D9D9D9",
        cartRed: "#FF5630",
      },
    },
  },
  plugins: [],
} satisfies Config;
