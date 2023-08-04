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
    text: 'Aceptar',
    width: 'w-[150px]',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Inicio',
    variant: 'secondary',
    width: 'w-[150px]',
  },
};

export const Grey: Story = {
  args: {
    text: 'Boton',
    variant: 'grey',
    width: 'w-[150px]',
  },
};

export const Link: Story = {
  args: {
    text: 'Link',
    variant: 'link',
    width: 'w-[150px]',
  },
};
