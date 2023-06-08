import Typography from './Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Kuspit/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
  colors: 'primary-color',
  children: <>Test</>,
};
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  colors: 'primary-color',
  children: <>Test</>,
};
export const Base = Template.bind({});
Base.args = {
  size: 'base',
  colors: 'primary-color',
  children: <>Test</>,
};
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  colors: 'primary-color',
  children: <>Test</>,
};
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  colors: 'primary-color',
  children: <>Test</>,
};
export const MegaLarge = Template.bind({});
MegaLarge.args = {
  size: '2xl',
  colors: 'primary-color',
  children: <>Test</>,
};
