/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        content: '80rem',
        'heading-size': '45rem',
        'grid-image': 'calc(100vw - 200px)',
      },
      animation: {
        'glowing-text': 'glowing-text 6s linear infinite',
      },
      keyframes: {
        'glowing-text': {
          '0%': {
            filter: 'blur(1px)',
          },
          '40%': {
            filter: 'blur(1px)',
          },
          '42%': {
            filter: 'blur(0)',
          },
          '44%': {
            filter: 'blur(3px)',
          },
          '46%': {
            filter: 'blur(1px)',
          },
          '100%': {
            filter: 'blur(1px)',
          },
        },
      },
    },
  },
  plugins: ['@tailwindcss/line-clamp'],
}
