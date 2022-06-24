import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonSubmit } from '../../components/button-submit';
import { InputTextField } from '../../components/input-text-field';

export interface FormSignInData {
  email: string;
  company: string;
}

export const FormSignIn: FC = () => {
  const {
    register, handleSubmit, formState: { errors }, setError
  } = useForm<FormSignInData>();

  useEffect(() => {
    setError('company', { message: 'This company already exists. Please try to login or asked to be invited by an administrator' }, { shouldFocus: true });
  }, [setError]);

  const onSubmit = (data: FormSignInData): void => {
    const dd = data;
    dd.company = 'dd';
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <InputTextField
        data={{
          inputProps: {
            ...register('email', {
              required: 'We need it',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Not email format'
              }
            })
          },
          hasError: Boolean(errors.email)
        }}
        i18n={{
          label: 'Email',
          error: `${errors.email?.message}`
        }}
      />

      <InputTextField
        data={{
          inputProps: {
            ...register('company', {
              required: 'We need it'
            })
          },
          hasError: Boolean(errors.company)
        }}
        i18n={{
          label: 'Company Name',
          error: `${errors.company?.message}`
        }}
      />
      <ButtonSubmit data={{}} i18n={{ label: 'Sign in' }} />
    </form>
  );
};
