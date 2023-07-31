import type { Meta, StoryObj } from '@storybook/react';
import DatePickerComponent from './DatePicker';

const meta: Meta<typeof DatePickerComponent> = {
  component: Date,
  title: 'Dyp/UI/DatePicker',
};

export default meta;

type Story = StoryObj<typeof DatePickerComponent>;

export const Main: Story = {
  args: {
    selectedDate: new Date(),
    withPortal: false,
    handleDateChange: () => {
      return null;
    },
  },
};
