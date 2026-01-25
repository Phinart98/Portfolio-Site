module.exports = {
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
          'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
        },
        colors: {
          // Semantic accent colors using CSS variables
          'accent': {
            '50': 'rgb(var(--color-accent-50) / <alpha-value>)',
            '100': 'rgb(var(--color-accent-100) / <alpha-value>)',
            '200': 'rgb(var(--color-accent-200) / <alpha-value>)',
            '300': 'rgb(var(--color-accent-300) / <alpha-value>)',
            '400': 'rgb(var(--color-accent-400) / <alpha-value>)',
            '500': 'rgb(var(--color-accent-500) / <alpha-value>)',
            '600': 'rgb(var(--color-accent-600) / <alpha-value>)',
            '700': 'rgb(var(--color-accent-700) / <alpha-value>)',
            '800': 'rgb(var(--color-accent-800) / <alpha-value>)',
            '900': 'rgb(var(--color-accent-900) / <alpha-value>)',
            '950': 'rgb(var(--color-accent-950) / <alpha-value>)',
          },
          // Surface colors for backgrounds/cards
          'surface': {
            '50': 'rgb(var(--color-surface-50) / <alpha-value>)',
            '100': 'rgb(var(--color-surface-100) / <alpha-value>)',
            '200': 'rgb(var(--color-surface-200) / <alpha-value>)',
            '300': 'rgb(var(--color-surface-300) / <alpha-value>)',
            '400': 'rgb(var(--color-surface-400) / <alpha-value>)',
            '500': 'rgb(var(--color-surface-500) / <alpha-value>)',
            '600': 'rgb(var(--color-surface-600) / <alpha-value>)',
            '700': 'rgb(var(--color-surface-700) / <alpha-value>)',
            '800': 'rgb(var(--color-surface-800) / <alpha-value>)',
            '900': 'rgb(var(--color-surface-900) / <alpha-value>)',
            '950': 'rgb(var(--color-surface-950) / <alpha-value>)',
          },
          // Semantic color tokens (auto-switch in dark mode)
          'primary': 'rgb(var(--color-primary) / <alpha-value>)',
          'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
          'primary-subtle': 'rgb(var(--color-primary-subtle) / <alpha-value>)',
          'primary-muted': 'rgb(var(--color-primary-muted) / <alpha-value>)',
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