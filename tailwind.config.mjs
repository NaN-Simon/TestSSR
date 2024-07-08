/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: 'selector',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,vue}'
  ],
  prefix: "",
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundColor: {
        'light': '#ffffff',
        'dark': '#333333',
      },
      textColor: {
        'light': '#000000',
        'dark': '#ffffff',
      },
      colors: {
        transparent: 'transparent',
        navigationStart: '#0000009a',
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      dropShadow: {
        'hero': '0px 0px 25px rgb(255 255 255 / 85%)',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins']
      },
      backgroundImage: {
        "gradient-instagram": "radial-gradient(circle farthest-corner at 32% 120%, #ffe17d 0, #ffcd69 10%, #fa9137 28%, #eb4141 42%, transparent 82%), linear-gradient(135deg, #234bd7 12%, #c33cbe 58%)",
        "gradient-instagram-hover": "radial-gradient(circle farthest-corner at 32% 120%, #ffdb64 0, #ffc550 10%, #f9831e 28%, #e92a2a 42%, transparent 82%), linear-gradient(135deg, #1f43c1 12%, #b036ab 58%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}