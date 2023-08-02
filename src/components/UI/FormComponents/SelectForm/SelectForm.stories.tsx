import type { Meta, StoryObj } from '@storybook/react';
import SelectForm from './SelectForm';
import { WithRHF } from '@/components/storybook/WithRHF';

const meta: Meta<typeof SelectForm> = {
  component: SelectForm,
  title: 'Dyp/Form Components/SelectForm',
  decorators: [WithRHF(false)],
};

export default meta;

type Story = StoryObj<typeof SelectForm>;

export const WithInputForm: Story = {
  args: {
    name: 'CURP',
  },
};
