import NavLinks from './NavLinks';
import NavLink from '../navlink/NavLink';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navigation/NavLinks',
  component: NavLinks,
  subcomponents: { NavLink },
  args: {
    navLinks: ['link', 'link 2', 'link 3', 'link 4']
  }
} as ComponentMeta<typeof NavLinks>;

export const NavTemplate: ComponentStory<typeof NavLinks> = (args) => {
  return (
    <NavLinks {...args}>
      {args.navLinks.map((link: string) => (
        <NavLink text={link} />
      ))}
    </NavLinks>
  );
};

export const LandingPage: ComponentStory<typeof NavLinks> = NavTemplate.bind(
  {}
);
LandingPage.args = {
  navLinks: ['about', 'medium', 'join community', 'roadmap']
};
