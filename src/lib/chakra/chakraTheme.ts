import { extendTheme, Theme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', SegoeUI, 'Microsoft JhengHei', 微軟正黑體, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    heading: `-apple-system, BlinkMacSystemFont, 'Segoe UI', SegoeUI, 'Microsoft JhengHei', 微軟正黑體, 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    mono: 'Menlo, monospace',
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
} as Theme) as Theme;
