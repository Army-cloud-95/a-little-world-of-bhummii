/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#F8C8DC',
        babyPink: '#FADADD',
        lavender: '#E6D9F2',
        cream: '#FFF8F0',
        softBurgundy: '#9D526F',
        warmRose: '#E07A94',
        dustyRose: '#C97D90',
        parchment: '#FDFBF7',
        parchmentDark: '#F4ECE1',
        waxRed: '#B23B4A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwritten: ['"Caveat"', 'cursive'],
        script: ['"Sacramento"', 'cursive'],
        letter: ['"Homemade Apple"', '"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'scrapbook': '0 8px 30px rgba(157, 82, 111, 0.12), 0 2px 8px rgba(0,0,0,0.04)',
        'polaroid': '0 10px 25px -5px rgba(157, 82, 111, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'vintage': 'inset 0 0 40px rgba(157, 82, 111, 0.08), 0 12px 35px rgba(90, 50, 65, 0.15)',
        'glow': '0 0 25px rgba(248, 200, 220, 0.6)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'flicker': 'flicker 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        flicker: {
          '0%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.9' },
          '100%': { transform: 'scale(1.08) rotate(1.5deg)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
