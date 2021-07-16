import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ToggleSwitch, Props } from '../src';

const meta: Meta = {
  title: 'Input/Toggle Switch',
  component: ToggleSwitch,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
