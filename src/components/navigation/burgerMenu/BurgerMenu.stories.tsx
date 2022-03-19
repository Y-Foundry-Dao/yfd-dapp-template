import BurgerMenu from './BurgerMenu';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export default {
  title: 'Navigation/BurgerMenu',
  component: BurgerMenu,
  args: {
    open: false,
    navLinks: ['link', 'link 2', 'link 3', 'link 4']
  },
  parameters: {
    // The viewports object from the Essentials addon
    viewport: {
      // The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      // Your own default viewport
      defaultViewport: 'iphone5'
    }
  }
} as ComponentMeta<typeof BurgerMenu>;

export const TemplateBurgerMenu: ComponentStory<typeof BurgerMenu> = (args) => {
  return <BurgerMenu {...args} />;
};

export const LandingPageBurgerMenu: ComponentStory<typeof BurgerMenu> =
  TemplateBurgerMenu.bind({});

LandingPageBurgerMenu.args = {
  navLinks: ['about', 'medium', 'join community', 'roadmap']
};

export const Open: ComponentStory<typeof BurgerMenu> = TemplateBurgerMenu.bind(
  {}
);

Open.args = {
  open: true
};
Open.argTypes = {
  open: {
    table: {
      disable: true
    }
  },
  setOpen: {
    table: {
      disable: true
    }
  }
};
