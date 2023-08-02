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
    size: 'auth-size',
  },
};

export const TitleOnboardingSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'onboarding-size',
  },
};
export const TitleSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'title-size',
  },
};
export const ExtraSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'extra-size',
  },
};
export const TextSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'text-size',
    colors: 'text-size',
  },
};

export const SmallSize: Story = {
  args: {
    children: 'Texto de prueba',
    size: 'small-size',
    colors: 'secondary-gray',
  },
};
