import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Dyp/UI/Typography',
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-2xl',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-2xl',
    colors: 'secondary',
  },
};

export const PrimaryGray: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-2xl',
    colors: 'secondary-gray',
  },
};

export const TitleAuthSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-6xl',
  },
};

export const TitleOnboardingSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-3xl',
  },
};
export const TitleSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-2xl',
  },
};
export const ExtraSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-xl',
  },
};
export const TextSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-lg',
    colors: 'secondary-gray',
  },
};

export const SmallSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-base',
    colors: 'secondary-gray',
  },
};
