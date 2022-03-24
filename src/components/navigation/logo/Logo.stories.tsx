import Logo from 'components/navigation/logo/Logo';
import yLogo from 'assets/yfd/logo-orange.svg';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/YLogo',
  component: Logo
} as ComponentMeta<typeof Logo>;

export const LogoTemplate: ComponentStory<typeof Logo> = (args) => (
  <Logo {...args} />
);
LogoTemplate.args = {
  src: yLogo,
  alt: 'Y logo'
};
