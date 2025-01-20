// /** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  darkMode: ['selector', "[data-theme='dark']"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    logs: false,
  },
} satisfies Config;
