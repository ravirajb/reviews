import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
  mono: 'JetBrains Mono, monospace',
};

const darkTheme = {
  bg: 'gray.900',
  text: 'white',
  card: 'gray.800',
  accent: 'brand.400',
  accentHover: 'brand.300',
  border: 'gray.700',
  input: 'gray.800',
  inputBorder: 'gray.700',
  inputText: 'white',
  buttonBg: 'brand.500',
  buttonHover: 'brand.600',
  buttonActive: 'brand.700',
  buttonBorder: 'brand.500',
  buttonDisabled: 'gray.600',
  link: 'brand.400',
  linkHover: 'brand.300',
  badgeBg: 'blue.500',
  badgeText: 'white',
  ratingStar: 'yellow.500',
};

const lightTheme = {
  bg: 'white',
  text: 'gray.900',
  card: 'white',
  accent: 'brand.500',
  accentHover: 'brand.600',
  border: 'gray.200',
  input: 'white',
  inputBorder: 'gray.300',
  inputText: 'gray.900',
  buttonBg: 'brand.500',
  buttonHover: 'brand.600',
  buttonActive: 'brand.700',
  buttonBorder: 'brand.500',
  buttonDisabled: 'gray.300',
  link: 'brand.500',
  linkHover: 'brand.600',
  badgeBg: 'blue.400',
  badgeText: 'white',
  ratingStar: 'yellow.600',
};

interface ThemeProps {
  colorMode: string;
}

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
  },
  fonts,
  styles: {
    global: (props: ThemeProps) => ({
      body: {
        bg: props.colorMode === 'dark' ? darkTheme.bg : lightTheme.bg,
        color: props.colorMode === 'dark' ? darkTheme.text : lightTheme.text,
        fontFamily: fonts.body,
      },
      '::-webkit-scrollbar': {
        width: '8px',
      },
      '::-webkit-scrollbar-track': {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.100',
      },
      '::-webkit-scrollbar-thumb': {
        bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.300',
        borderRadius: '4px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        bg: props.colorMode === 'dark' ? 'gray.500' : 'gray.200',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
    },
    Card: {
      defaultProps: {
        bg: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.card : lightTheme.card,
        color: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.text : lightTheme.text,
        borderColor: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.border : lightTheme.border,
      },
    },
    Input: {
      defaultProps: {
        bg: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.input : lightTheme.input,
        borderColor: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.inputBorder : lightTheme.inputBorder,
        color: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.inputText : lightTheme.inputText,
      },
    },
    Badge: {
      defaultProps: {
        bg: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.badgeBg : lightTheme.badgeBg,
        color: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.badgeText : lightTheme.badgeText,
      },
    },
    Link: {
      defaultProps: {
        color: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.link : lightTheme.link,
        _hover: {
          color: (props: ThemeProps) => props.colorMode === 'dark' ? darkTheme.linkHover : lightTheme.linkHover,
        },
      },
    },
  },
});

export default theme;
