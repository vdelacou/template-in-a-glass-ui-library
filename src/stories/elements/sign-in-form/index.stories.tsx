import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormSignIn } from '../../../lib';

export default {
  title: 'Elements/Sign In Form',
  component: FormSignIn
} as ComponentMeta<typeof FormSignIn>;

const Template: ComponentStory<typeof FormSignIn> = () => (
  <FormSignIn />
);

export const Component = Template.bind({});
Component.storyName = 'Sign In Form';
Component.parameters = { layout: 'centered' };
Component.args = {
  data: {}
};
