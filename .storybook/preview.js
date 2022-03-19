import ThemeComponent from '/src/styles/ThemeComponent';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'yfd gradient',
    values: [
      {
        name: 'yfd gradient',
        value:
          'radial-gradient(53% 108% at -12% 17%, rgba(70, 56, 4, 0.2) 0%, rgba(0, 0, 0, 0) 98.24%), linear-gradient(111.53deg, #060E1B 0.63%, #1F0D0E 98.4%);'
      },
      {
        name: 'yfd black',
        value: '#040307'
      },
      {
        name: 'yfd white',
        value: '#FCFEFF'
      },
      {
        name: 'yfd orange',
        value: '#D8552A'
      },
      {
        name: 'yfd blue',
        value: '#1F43BF'
      },
      {
        name: 'yfd tan',
        value: '#D7B9A3'
      }
    ]
  },
  darkMode: {
    current: 'dark'
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const decorators = [
  (Story) => (
    <ThemeComponent>
      <Story />
    </ThemeComponent>
  )
];
