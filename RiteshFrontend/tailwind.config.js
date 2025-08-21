/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0A0A0A', // Black (Obsidian Background)
'sky-blue': '#7C3AED',     // Violet-600 (Purple Accent)
'off-white': '#F8FAFC',    // Slate-50 (Light Text)
'graph-grey': '#64748B',   // Slate-500 (Secondary Text)
'golden': '#F59E0B',       // Amber-500 (Gold Accent)
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
