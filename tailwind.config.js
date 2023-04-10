// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         gray: {
//           900: "#1a202c",
//         },
//       },
//       fontFamily: {
//         body: [
//           "ui-sans-serif",
//           "system-ui",
//           "-apple-system",
//           "BlinkMacSystemFont",
//           "Segoe UI",
//           "Roboto",
//           "Helvetica Neue",
//           "Arial",
//           "Noto Sans",
//           "sans-serif",
//           "Apple Color Emoji",
//           "Segoe UI Emoji",
//           "Segoe UI Symbol",
//           "Noto Color Emoji",
//         ],
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
