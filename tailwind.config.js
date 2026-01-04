export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'theme-bg': {
          light: '#FFFFFF',
          dark: '#000000',
        },
        'theme-surface': {
          light: '#F5F5F5',
          dark: '#1A1A1A',
        },
        'theme-primary': {
          light: '#000000',
          dark: '#FFFFFF',
        },
        'theme-secondary': {
          light: '#666666',
          dark: '#999999',
        },
        'theme-accent': {
          light: '#333333',
          dark: '#CCCCCC',
        },
        'theme-border': {
          light: '#E0E0E0',
          dark: '#333333',
        },
        'theme-text': {
          light: '#000000',
          dark: '#FFFFFF',
        },
        'theme-text-secondary': {
          light: '#666666',
          dark: '#999999',
        },
        'theme-tint': {
          light: '#0a7ea4',
          dark: '#FFFFFF',
        },
        'theme-error': '#FF3B30',
        'theme-success': '#34C759',
      },
    },
  },
  plugins: [],
}