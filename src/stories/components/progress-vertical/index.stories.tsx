import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProgressVertical, ProgressVerticalData } from '../../../lib';

export default {
  title: 'Components/Progress Vertical',
  component: ProgressVertical
} as ComponentMeta<typeof ProgressVertical>;

const Template: ComponentStory<typeof ProgressVertical> = (props: { data: ProgressVerticalData }) => {
  const { data } = props;
  return (
    <div className="bg-primary-700 p-12">
      <ProgressVertical data={data} />
    </div>
  );
};

export const Component = Template.bind({});
Component.storyName = 'Progress Vertical';
Component.parameters = { layout: 'centered' };
Component.args = {
  data: {
    steps: [
      { name: 'Create Account', order: 0, status: 'COMPLETE' },
      { name: 'Verify Email', order: 1, status: 'CURRENT' },
      { name: 'Company Address', order: 2, status: 'WAITING' }
    ]
  }
};
