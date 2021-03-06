import Burger from 'components/navigation/burger/Burger';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { useState } from 'react';
import { TemplateBurgerMenu } from 'components/navigation/burgerMenu/BurgerMenu.stories';
import useOnClickOutside from 'utilities/useOnClickOutside';
import { useRef } from 'react';

export default {
  title: 'Navigation/Burger',
  component: Burger,
  args: {
    open: false,
    navLinks: { ...TemplateBurgerMenu.args?.navLinks }
  },
  argTypes: {
    navLinks: {
      table: {
        disable: true
      }
    },
    setOpen: {
      table: {
        disable: true
      }
    }
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
} as ComponentMeta<typeof Burger>;

export const BurgerTemplate: ComponentStory<typeof Burger> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(burgerRef, () => setOpen(false));
  return <Burger {...args} open={open} setOpen={setOpen} />;
};

export const LandingPage: ComponentStory<typeof Burger> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const burgerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(burgerRef, () => setOpen(false));
  return <Burger {...args} open={open} setOpen={setOpen} />;
};
LandingPage.args = {
  navLinks: ['about', 'medium', 'join community', 'roadmap']
};
