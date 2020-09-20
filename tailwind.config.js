module.exports = {
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: theme => ({
      default: {
        css: {
          // color: theme('colors.cobalt'),
          color: false,
          '@apply text-cobalt dark:text-gray-300': '',
          strong: theme('colors.cobalt'),
          'h1, h2, h3, h4': {
            // color: theme('colors.cobalt'),
            color: false,
            '@apply text-cobalt dark:text-gray-300': '',
          },
          h1: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
          h2: {
            marginTop: '1.5rem',
            marginBottom: '.75rem',
          },
          a: {
            // color: theme('colors.cb-dusty-blue'),
            color: false,
            '@apply text-cb-dusty-blue dark:text-cb-pink': '',
            fontWeight: 'bold',
            textDecoration: 'none',
          },
          'h2 > a': {
            color: false,
            '@apply text-cb-dusty-blue dark:text-cb-yellow': '',
          },
          img: {
            width: '2rem',
            height: '2rem',
            borderRadius: '9999px',
          },
          'ul > li:before': {
            backgroundColor: theme('colors.cb-dusty-blue'),
          },
        },
      },
      xl: {
        css: {
          h1: {
            marginTop: 0,
            fontWeight: 'bold',
          },
          h2: {
            marginTop: '2rem',
            marginBottom: '1rem',
          },
        },
      },
      sm: {
        css: {
          h1: {
            fontSize: theme('text.4xl'),
          },
        },
      },
    }),
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#ff9d00',
        'cb-mint': '#2affdf',
        'cb-off-blue': '#0d3a58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232d',
        'cb-pink': '#fb94ff',
        'cb-light-blue': '#9effff',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
