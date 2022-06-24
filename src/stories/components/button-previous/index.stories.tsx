import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ButtonPrevious, ButtonPreviousData, ButtonPreviousTranslation, Properties
} from '../../../lib';

export default {
  title: 'Components/Button/Button Previous',
  component: ButtonPrevious
} as ComponentMeta<typeof ButtonPrevious>;

const Template: ComponentStory<typeof ButtonPrevious> = (props: Properties<ButtonPreviousData, ButtonPreviousTranslation>) => {
  const { data, i18n } = props;
  return (
    <ButtonPrevious data={data} i18n={i18n} />
  );
};

export const Regular = Template.bind({});
Regular.storyName = 'Regular';
Regular.parameters = { layout: 'centered' };
Regular.args = {
  data: {
    onClick: action('button clicked')
  },
  i18n: {
    previousLabel: 'Previous'
  }
};
Regular.argTypes = {
  data: { control: false }
};
