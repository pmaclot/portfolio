import toshTheme from '@theme-ui/preset-tosh';

const theme = {
  ...toshTheme,
  alerts: {
    primary: {
      color: 'background',
      bg: 'primary'
    },
    secondary: {
      color: 'background',
      bg: 'secondary'
    },
    accent: {
      color: 'background',
      bg: 'accent'
    },
    highlight: {
      color: 'text',
      bg: 'highlight'
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary'
    },
    secondary: {
      color: 'background',
      bg: 'secondary'
    },
    accent: {
      color: 'background',
      bg: 'accent'
    },
    highlight: {
      color: 'text',
      bg: 'highlight'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: '0px 0px 0px 1px inset'
    },
    circle: {
      color: 'background',
      bg: 'primary',
      borderRadius: '9999px'
    }
  },
  config: {
    initialColorModeName: 'light',
    printColorModeName: 'light',
    useColorSchemeMediaQuery: false,
    useCustomProperties: true,
    useLocalStorage: false
  },
  fonts: {
    body: 'Open Sans, sans-serif',
    heading: 'Ubuntu, sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 700
  }
};

export default theme;
