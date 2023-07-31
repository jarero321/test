import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Dyp/UI/Buttons',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Boton',
    width: 'w-[100px]',
  },
};
