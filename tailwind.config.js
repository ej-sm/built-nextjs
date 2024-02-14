module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Example custom colors
      primary: "#FCD900",
      secondary: "#00C1F5",
      tertiary: "#ABFF40",
      quaternary: "#6F5AEC",
      bg1: "#5A8CFF",
      gray: "#494C65",
    },
  },
  plugins: [],
}