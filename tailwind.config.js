const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      wpiblue: {
        50: "#0E57A6",
      },
      wpigreen: {
        50: "#6DBE45",
      },
    }, // <- Added missing closing bracket here
    extend: {},
  },
  plugins: [],
});
