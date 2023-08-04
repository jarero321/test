import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: 'Dyp/Form Components/CheckBox',
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const WithoutText: Story = {
  args: {
    name: 'Iniciar sesión',
  },
};

export const withText: Story = {
  args: {
    name: 'Iniciar sesión',
    label: 'Texto de prueba',
  },
};
