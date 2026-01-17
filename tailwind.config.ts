module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
          'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
        },
        colors: {
          'dark': {
            '50': '#f8fafc',
            '100': '#f1f5f9',
            '200': '#e2e8f0',
            '300': '#cbd5e1',
            '400': '#94a3b8',
            '500': '#64748b',
            '600': '#475569',
            '700': '#2d3748',
            '800': '#1a202c',
            '900': '#171923',
            '950': '#0d1117',
          },
          'orange': {
            '50': '#fff7ed',
            '100': '#ffedd5',
            '200': '#fed7aa',
            '300': '#fdba74',
            '400': '#fb923c',
            '500': '#f97316',
            '600': '#ea580c',
            '700': '#c2410c',
            '800': '#9a3412',
            '900': '#7c2d12',
            '950': '#431407',
          },
          'brand': {
            'primary': '#ea580c',
            'primary-hover': '#c2410c',
            'dark': '#fb923c',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out',
          'slide-up': 'slideUp 0.8s ease-out',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }