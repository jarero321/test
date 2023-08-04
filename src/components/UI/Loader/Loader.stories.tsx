import type { Meta, StoryObj } from '@storybook/react';
import Loader from './Loader';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Dyp/UI/Loader',
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Main: Story = {
  args: {
    color: 'red',
  },
};
