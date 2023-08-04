import type { Meta, StoryObj } from '@storybook/react';
import GridTextForm from './GridTextForm';
import { InputForm } from '@/components';
import { WithRHF } from '@/components/storybook/WithRHF';

const meta: Meta<typeof GridTextForm> = {
  component: GridTextForm,
  title: 'Dyp/Form Components/GridTextForm',
  decorators: [WithRHF(false)],
};

export default meta;

type Story = StoryObj<typeof GridTextForm>;

export const WithInputForm: Story = {
  args: {
    text: 'CURP',
    children: <InputForm label="" name="curp" placeholder="13 caracteres" />,
  },
};
