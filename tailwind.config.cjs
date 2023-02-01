module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkBlue: "#303669",
        appleColor: "rgba(0, 0, 0, 0.8)",
        appleGreyColor: "#fbfbfd",
        appleDarkBlue: "#0066cc",
        appleDarkpurple: "#35283C",
        applebgBody: "#fbfbfd",
        applePink: "#fec2eb",
        applePinkLight: "#f8e1e7",
        appleDarkgrey: "#86868b",
        appleGreyFitneesSection: "#F2F2F2",
        appleBlack: "#1d1d1f",
        appleNavColor: "#d6d6d6",
        searchBoxColor: "#6E6E73",
      },
      spacing: {
        112: "28rem",
        21: "1.313rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
