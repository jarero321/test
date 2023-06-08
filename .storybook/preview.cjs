import '../src/index.css';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const globalTypes = {
  theme: {
    extend: {
      colors: {
        'primary-color': '#3D1152',
        'primary-gray': '#F5F5FA',
        'secondary-gray': '#848484',
        secondary: '#C2D500',
        pending: '#F0DF97',
        canceled: '#DA6662',
        complete: '#AFD1B8',
      },
    },
  }
}