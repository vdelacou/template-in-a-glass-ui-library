import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressHorizontal, ProgressHorizontalData, ProgressHorizontalTranslation } from '../../../lib';

export default {
  title: 'Components/Progress Horizontal',
  component: ProgressHorizontal
} as ComponentMeta<typeof ProgressHorizontal>;

const Template: ComponentStory<typeof ProgressHorizontal> = (props: { data: ProgressHorizontalData, i18n: ProgressHorizontalTranslation }) => {
  const { data, i18n } = props;
  return (
    <ProgressHorizontal data={data} i18n={i18n} />
  );
};

export const Component = Template.bind({});
Component.storyName = 'Progress Horizontal';
Component.parameters = { layout: 'centered' };
Component.args = {
  data: {
    steps: [
      { status: 'COMPLETE', order: 0 },
      { status: 'CURRENT', order: 1 },
      { status: 'WAITING', order: 2 }
    ]
  },
  i18n: {
    stepLabel: (currentIndex: number, total: number) => `Step ${currentIndex} of ${total}`
  }
};
Component.argTypes = {
  data: { control: false },
  i18n: { control: false }
};
