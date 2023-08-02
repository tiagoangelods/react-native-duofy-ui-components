// lib/tailwind.js
import { TwConfig, create } from 'twrnc';
const defaultTheme = require('tailwindcss/defaultTheme');
let tw = create();
try {
  tw = create(require('../../../tailwind.config.js'));
} catch {
  tw = create({
    content: [
      '*.{html,js,ts,tsx,css}',
      './src/**/*.{html,ts,tsx,js,jsx,css,scss}',
      './src/components/**/*.{html,ts,tsx,js,jsx,css,scss}',
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            'primary': 'rgba(248, 195, 94, 1)',
            'secondary': 'rgba(248, 195, 94, .8)',
            'lighter': 'rgba(248, 195, 94, .6)',
            'light': 'rgba(248, 195, 94, .4)',
            'lightest': 'rgba(248, 195, 94, .1)',
            'yellow': {
              darker: '#A05E03',
              dark: '#FFB323',
              lighter: '#FFC462',
              light: '#FFD188',
              lightest: '#FFEFD7',
            },
            'black': {
              primary: 'rgba(13, 16, 16, 1)',
              secondary: 'rgba(13, 16, 16, .8)',
              lighter: 'rgba(13, 16, 16, .6)',
              light: 'rgba(13, 16, 16, .4)',
              lightest: 'rgba(13, 16, 16, .1)',
            },
            'red': {
              darker: '#D3180C',
              dark: '#FF5247',
              lighter: '#FF6D6D',
              light: '#FF9898',
              lightest: '#FFE5E5',
            },
            'green': {
              darker: '#198155',
              dark: '#23C16B',
              lighter: '#4CD471',
              light: '#7DDE86',
              lightest: '#ECFCE5',
            },
            'blue': {
              darker: '#0065D0',
              dark: '#48A7F8',
              lighter: '#6EC2FB',
              light: '#9BDCFD',
              lightest: '#C9F0FF',
            },
            'primary-gray': {
              base: 'rgba(233, 233, 233, 1)',
              lighter: 'rgba(233, 233, 233, .6)',
              light: 'rgba(233, 233, 233, .4)',
              lightest: 'rgba(233, 233, 233, .2)',
            },
            'secondary-gray': {
              base: 'rgba(229, 229, 229, 1)',
              lighter: 'rgba(229, 229, 229, .6)',
              light: 'rgba(229, 229, 229, .4)',
              lightest: 'rgba(229, 229, 229, .2)',
            },
          },
        },
        fontFamily: {
          sans: ['manrope', ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
          title1: '4rem',
          title2: '2.625rem',
          title3: '2rem',
          large: '1.5rem',
          regular: '1.25rem',
          small: '1.125rem',
          tiny: '1rem',
        },
        fontWeight: {
          bold: 700,
          medium: 500,
          regular: 400,
        },
      },
    },
    plugins: [],
  } as TwConfig);
}

// create the customized version...
// <- your path may differ

// ... and then this becomes the main function your app uses
export default tw;
