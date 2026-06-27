/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050505',
        'bg-secondary': '#0B0B0B',
        'bg-card': '#111111',

        'accent-gold': '#D4B483',
        'accent-lime': '#AAFF00',

        'text-muted': '#B0B0B0',

        'border-subtle': 'rgba(255,255,255,0.08)',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        'special-gothic': ['"Special Gothic Expanded One"', 'sans-serif'],
        'albert-sans': ['"Albert Sans"', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },

      letterSpacing: {
        widest2: '0.15em',
        widest3: '0.25em',
      },

      maxWidth: {
        '8xl': '1400px',
      },

      backdropBlur: {
        xs: '2px',
      },

      backgroundImage: {
        'glass-card':
          'linear-gradient(90deg, rgba(255,255,255,.06), rgba(255,255,255,.03), transparent)',
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px)',
      },

      backgroundSize: {
        grid: '180px 100%',
      },

      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',

        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse-slow': 'marquee-reverse 60s linear infinite',

        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slow-delayed': 'float 8s ease-in-out 3s infinite',

        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },

      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },

        'marquee-reverse': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },

        float: {
          '0%,100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },

        'pulse-glow': {
          '0%,100%': {
            boxShadow:
              '0 0 20px rgba(170,255,0,.3),0 0 60px rgba(170,255,0,.1)',
          },
          '50%': {
            boxShadow:
              '0 0 40px rgba(170,255,0,.6),0 0 100px rgba(170,255,0,.2)',
          },
        },
      },

      boxShadow: {
        glass:
          '0 10px 30px rgba(0,0,0,.35), inset 0 1px 1px rgba(255,255,255,.05)',
      },

      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};