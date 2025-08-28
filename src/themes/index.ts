import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

export const LightThemeCustom: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    card: '#f5f5f5',
    text: '#000000',
    primary: '#6200ee',
    border: '#ccc',
  },
};

export const DarkThemeCustom: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    card: '#1f1f1f',
    text: '#e0e0e0',
    primary: '#bb86fc',
    border: '#333',
  },
};
