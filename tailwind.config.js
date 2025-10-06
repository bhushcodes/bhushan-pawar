/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#4CAF50',
        arcBlack: '#212121',
        arcRed: '#FF5722',
        arcSand: '#F5F5F5',
        arcGray: '#B3B3B3',
        arcMuted: '#9E9E9E',
        arcSteel: '#7D7D7D',
        arcBlue: '#2196F3',
        arcAmber: '#FFC107',
        arcDarkBg: 'rgb(41 41 41 / <alpha-value>)',
        arcDarkSurface: 'rgb(41 41 41 / <alpha-value>)',
        arcDarkText: '#000000',
        arcDarkSubtext: '#000000',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brutalLight: '6px 6px 0 #212121',
        brutalDarkMint: '6px 6px 0 #FFFFFF',
        brutalDark: '6px 6px 0 #FFFFFF',
        brutalAccentMint: '8px 8px 0 #212121',
        brutalAccentSand: '8px 8px 0 #FFFFFF',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
      backgroundImage: {
        dots: 'radial-gradient(circle at center, rgba(0,0,0,0.12) 2px, transparent 2.5px)',
      },
    },
  },
  plugins: [],
}
