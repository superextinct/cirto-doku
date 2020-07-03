module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
      fontFamily: {
        'sans': ['Fakt Pro', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      extend: {
        colors: {
          'accent-1': '#FAFAFA',
          'accent-2': '#EAEAEA',
          'accent-7': '#333',
          success: '#0070f3',
          cyan: '#79FFE1',
        },
        spacing: {
          28: '7rem',
        },
        letterSpacing: {
          tighter: '-.04em',
        },
        lineHeight: {
          tight: 1.2,
        },
        fontSize: {
          '5xl': '2.5rem',
          '6xl': '2.75rem',
          '7xl': '4.5rem',
          '8xl': '6.25rem',
        },
        screens: {
          'xl': '1440px',
        },
        boxShadow: {
          small: '0 5px 10px rgba(0, 0, 0, 0.12)',
          medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        },
      },
    },
  }