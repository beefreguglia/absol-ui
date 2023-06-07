/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'sapron',
      values: [{ name: 'Sapron', value: '#E7EAF1'}],
    }, 
  },
};

export default preview;
