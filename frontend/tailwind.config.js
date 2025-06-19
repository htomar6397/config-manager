/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        primary: {
          light: 'rgba(99, 102, 241, 0.1)',
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        secondary: {
          light: 'rgba(96, 165, 250, 0.1)',
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
        },
        accent: {
          light: 'rgba(139, 92, 246, 0.1)',
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
        },
        // Dark theme colors
        dark: {
          50: 'rgba(248, 250, 252, 0.05)',
          100: 'rgba(241, 245, 249, 0.1)',
          200: 'rgba(226, 232, 240, 0.2)',
          300: 'rgba(203, 213, 225, 0.3)',
          400: 'rgba(148, 163, 184, 0.4)',
          500: 'rgba(100, 116, 139, 0.5)',
          600: 'rgba(71, 85, 105, 0.6)',
          700: 'rgba(51, 65, 85, 0.8)',
          800: 'rgba(30, 41, 59, 0.9)',
          900: 'rgba(15, 23, 42, 0.95)',
          950: 'rgba(2, 6, 23, 0.98)',
        },
      },
      backgroundColor: {
        light: 'rgba(255, 255, 255, 0.9)',
        dark: 'rgba(15, 23, 42, 0.95)',
      },
      textColor: {
        light: 'rgba(31, 41, 55, 0.95)',
        dark: 'rgba(249, 250, 251, 0.95)',
      },
      borderColor: {
        light: 'rgba(209, 213, 219, 0.3)',
        dark: 'rgba(55, 65, 81, 0.5)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 4px 30px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'blob': 'blob 7s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      transitionProperty: {
        'theme': 'background-color, color, border-color, box-shadow',
        'all': 'all',
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
