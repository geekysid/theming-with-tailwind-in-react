/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      textColor: {
        /* colors for text */
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          inverted: "var(--color-text-inverted)",
        },
      },
      backgroundColor: {
        /* colors for background */
        skin: {
          primary: "var(--color-bg-primary)",
          "button-accent": "var(--color-button-accent)",
          "button-accent-hover": "var(--color-button-accent-hover)",
          "button-muted": "var(--color-button-muted)",
        },
      },
      gradientColorStops: {
        /* colors for gradients */
        skin: {
          hue: "var(--color-bg-primary)",
        },
      },
      fontFamily: {},
    },
  },
};
