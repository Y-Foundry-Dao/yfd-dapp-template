import BurgerIcon from './BurgerIcon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { useState } from 'react';

export default {
  title: 'Navigation/BurgerIcon',
  component: BurgerIcon,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone5'
    }
  },
  argTypes: {
    setOpen: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof BurgerIcon>;

export const BurgerIconTemplate: ComponentStory<typeof BurgerIcon> = (args) => {
  const [open, setOpen] = useState(false);

  return <BurgerIcon {...args} open={open} setOpen={setOpen} />;
};

export const Open: ComponentStory<typeof BurgerIcon> = (args) => {
  const [open, setOpen] = useState(true);

  return <BurgerIcon {...args} setOpen={setOpen} />;
};
Open.args = {
  open: true
};
Open.argTypes = {
  open: {
    table: {
      disable: true
    }
  }
};

export const Closed: ComponentStory<typeof BurgerIcon> = (args) => {
  const [open, setOpen] = useState(false);

  return <BurgerIcon {...args} setOpen={setOpen} />;
};
Closed.args = {
  open: false
};
Closed.argTypes = {
  open: {
    table: {
      disable: true
    }
  }
};
