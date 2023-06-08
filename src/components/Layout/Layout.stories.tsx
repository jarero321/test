import Layout from './Layout';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Kuspit/Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const WithSideBar = Template.bind({});
WithSideBar.args = {
  children: <>Resto de la pagina</>,
  sideBar: <div className="w-full bg-complete h-full"> Esto es un sideBar</div>,
};

export const WithoutSideBar = Template.bind({});
WithoutSideBar.args = {
  children: <>Resto de la pagina</>,
};
