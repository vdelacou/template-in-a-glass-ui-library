import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  InputTextField, InputTextFieldData, InputTextFieldTranslation, Properties
} from '../../../lib';

export default {
  title: 'Components/Input Text Field',
  component: InputTextField
} as ComponentMeta<typeof InputTextField>;

const Template: ComponentStory<typeof InputTextField> = (props: Properties<InputTextFieldData, InputTextFieldTranslation>) => {
  const { data, i18n } = props;
  return (
    <InputTextField data={data} i18n={i18n} />
  );
};

export const Regular = Template.bind({});
Regular.storyName = 'Regular';
Regular.parameters = { layout: 'centered' };
Regular.args = {
  data: {
    inputProps: {},
    hasError: false
  },
  i18n: {
    label: 'Email'
  }
};
Regular.argTypes = {
  data: { control: false }
};

export const HasError = Template.bind({});
HasError.storyName = 'Has Error';
HasError.parameters = { layout: 'centered' };
HasError.args = {
  data: {
    inputProps: {},
    hasError: true
  },
  i18n: {
    label: 'Email',
    error: 'Email not valid'
  }
};
HasError.argTypes = {
  data: { control: false }
};
