import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#00D9FF',
          secondary: '#0EA5E9',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;