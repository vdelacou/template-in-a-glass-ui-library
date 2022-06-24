import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ButtonSubmit, ButtonSubmitData, ButtonSubmitTranslation, Properties
} from '../../../lib';

export default {
  title: 'Components/Button/Button Submit',
  component: ButtonSubmit
} as ComponentMeta<typeof ButtonSubmit>;

const Template: ComponentStory<typeof ButtonSubmit> = (props: Properties<ButtonSubmitData, ButtonSubmitTranslation>) => {
  const { data, i18n } = props;
  return (
    <ButtonSubmit data={data} i18n={i18n} />
  );
};

export const Regular = Template.bind({});
Regular.storyName = 'Regular';
Regular.parameters = { layout: 'centered' };
Regular.args = {
  data: {},
  i18n: {
    label: 'Submit'
  }
};
Regular.argTypes = {
  data: { control: false }
};

export const Loading = Template.bind({});
Loading.storyName = 'Loading';
Loading.parameters = { layout: 'centered' };
Loading.args = {
  data: { loading: true },
  i18n: {
    label: 'Submit'
  }
};
Loading.argTypes = {
  data: { control: false }
};
