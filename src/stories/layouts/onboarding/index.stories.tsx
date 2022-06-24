import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OnboardingLayout, OnboardingLayoutProperties } from '../../../lib';

export default {
  title: 'Layouts/Onboarding',
  component: OnboardingLayout
} as ComponentMeta<typeof OnboardingLayout>;

const Template: ComponentStory<typeof OnboardingLayout> = (props: { component: OnboardingLayoutProperties }) => {
  const { component } = props;
  return (
    <OnboardingLayout component={component} />
  );
};

export const Component = Template.bind({});
Component.storyName = 'Onboarding';
Component.parameters = { layout: 'fullscreen' };
Component.args = {
  component: {
    logo: <div className="h-8 rounded-lg border-4 border-gray-200 border-dashed" />
  }
};
