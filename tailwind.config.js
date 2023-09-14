/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        worksans: 'var(--font-work-sans)',
        inter: 'var(--font-inter)',
      },
      fontSize: {
        '2xs': '11px',
        '2sm': '13px',

      },
      colors: {
        'grey-ash': '#718096',
        'thrive-dark': '#171725',
        'grey-light': '#D6D6D6',
        'grey-lighter': '#ADADAD',
        'grey-lightest-90': '#F9F9F9',
        'grey-lightest-100': '#F5F5F5',
        'grey-lightest-200': '#E4EAF1',
        'grey-lightest-300': '#858585',
        'grey-lightest-350': '#9CA4AB',
        'grey-lightest-400': '#555555',
        'grey-opaque': 'rgba(253, 253, 253, 0.08)',
        'thrive-blue': '#1355FF',
        'promo-orange': '#FF8154',
        'black-opaque': 'rgba(0, 0, 0, 0.5)',
        'discount-orange': '#FF8154',
        'thrive-blue-light-100': 'rgba(19, 85, 255, 0.1)',
        'thrive-dark-blue': '#061A95',
        'required-red': '#FF5A1F',
        'modal-dark-purple': 'rgba(33, 23, 64, 0.55)',
        'modal-dark': 'rgba(0, 0, 0, 0.6)',
      },
      boxShadow: {
        'nav-menu': '4px 8px 16px rgba(69, 79, 89, 0.04)',
        'category-menu': '8px 16px 24px 20px rgba(69, 79, 89, 0.04)',
        'border-blue': 'inset 0px -2px 0px #1355FF',
        'search-result': '12px 20px 24px rgba(69, 79, 89, 0.08)',
      },
      spacing: {
        47: '180px',
        43: '172px',
        68: '272px',
        4.5: '18px',
      },
      screens: {
        '2md': '950px',
        xmd: '850px',
        xsm: '500px',
        xsm2: '600px',
        '3md': '1100px',
      },
    },
  },
  plugins: [],
};
