const colors = {
  primary: {
    100: '#E0F2FE',
    600: '#0876DD',
  },
  secondary: {
    100: '#CFFAFE',
    600: '#29D2D3',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  white: '#FFFFFF',
}

const shadows = {
  xs: '0px 2px 8px -3px #1C2C4029',
  sm: '0px 4px 12px -3px #1C2C401A',
  md: '0px 8px 16px -4px #1C2C4014',
  lg: '0px 10px 20px 0px #1C2C4014',
  xl: '4px 12px 24px 0px #1C2C4014',
  '2xl': '8px 16px 48px 0px #1C2C401F',
}

const fonts = {
  name: 'Archivo',
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  Display: {
    size: {
      '2xl': '64px',
      xl: '56px',
      lg: '48px',
      md: '36px',
      sm: '30px',
      xs: '24px',
    },
    spacing: {
      '2xl': '-0.02em',
      xl: '-0.01em',
      lg: '-0.01em',
      md: '-0.01em',
      sm: '-0.01em',
      xs: '-0.01em',
    },
    lineHeight: {
      '2xl': '80px',
      xl: '72px',
      lg: '60px',
      md: '48px',
      sm: '40px',
      xs: '32px',
    },
  },
  Body: {
    size: {
      xl: '20px',
      lg: '18px',
      md: '16px',
      sm: '14px',
      xs: '12px',
    },
    spacing: {
      xl: '0.01em',
      lg: '0.01em',
      md: '0.01em',
      sm: '0.01em',
      xs: '0.01em',
    },
    lineHeight: {
      xl: '28px',
      lg: '28px',
      md: '24px',
      sm: '20px',
      xs: '16px',
    },
  },
}

export const ViewportSizes = {
  Desktop: 1440,
  Tablet: 768,
  Mobile: 375,
}

const generateMediaQueryString = (viewportSize) => {
  return `@media (min-width: ${viewportSize}px)`
}

const breakpoints = {
  desktopOnly: generateMediaQueryString(ViewportSizes.Desktop),
  tabletOnly: generateMediaQueryString(ViewportSizes.Tablet),
  phoneOnly: generateMediaQueryString(ViewportSizes.Mobile),
}

export const theme = {
  colors,
  shadows,
  fonts,
  breakpoints,
};
