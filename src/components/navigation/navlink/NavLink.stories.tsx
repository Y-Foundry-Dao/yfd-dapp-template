import NavLink from './NavLink';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Navigation/NavLink',
  component: NavLink
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <NavLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Nav Text'
};
