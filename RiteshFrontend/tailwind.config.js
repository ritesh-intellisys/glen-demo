/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Background Colors
        'bg-primary': '#eff6ff',     // Ice white - Main background
        'bg-secondary': '#dbeafe',   // Soft sky blue - Secondary background
        'card-bg': '#ffffff',        // Pure white - Card backgrounds
        
        // Text Colors
        'text-primary': '#0f172a',   // Deep navy - Primary text
        'text-secondary': '#475569', // Cool gray - Secondary text
        'text-tertiary': '#000000',  // Black - Tertiary text
        'text-quaternary': '#ffffff', // White - Quaternary text
        
        // Accent Colors
        'accent-color': '#0284c7',   // Glacier blue - Primary accent
        'accent-light': '#38bdf8',   // Sky blue - Light accent
        'primary-blue': '#0ea5e9',   // Aqua blue - Primary blue
        'golden': '#F59E0B',         // Amber-500 - Gold accent (keeping for compatibility)
        
        // Border and Shadow Colors
        'border-color': '#bfdbfe',   // Light gray-blue - Borders
        'shadow-color': 'rgba(2, 132, 199, 0.1)', // Blue shadow
        'hover-bg': '#e0f2fe',       // Frosted light blue - Hover states
        
        // Utility Colors
        'chart-grid': '#cbd5e1',     // Light gray - Chart grids
        'success-color': '#21966f',  // Emerald green - Success states
        'danger-color': '#d72638',   // Bright red - Error states
        
        // Legacy colors for backward compatibility
        'forest-green': '#0f172a',   // Updated to match new scheme
        'sky-blue': '#0284c7',       // Updated to match new scheme
        'off-white': '#eff6ff',      // Updated to match new scheme
        'graph-grey': '#475569',     // Updated to match new scheme
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
