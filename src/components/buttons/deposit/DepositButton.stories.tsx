import DepositButton from './DepositButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'OpenPosition/DepositButton',
  component: DepositButton,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/uirWIPkZVQ40MfmiG2O5Rh/YFD-Prototype?node-id=1422%3A4315'
    }
  },
  args: { disabled: false, children: 'Button' }
} as ComponentMeta<typeof DepositButton>;

export const DepositTemplate: ComponentStory<typeof DepositButton> = (args) => (
  <DepositButton {...args} />
);

export const Disabled: ComponentStory<typeof DepositButton> =
  DepositTemplate.bind({});

Disabled.args = { disabled: true, ...DepositTemplate.args };
