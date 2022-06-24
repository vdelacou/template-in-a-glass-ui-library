import { FC } from 'react';
import { Properties } from '../../utils/props';
import { classNames } from '../../utils/styles';

export interface ButtonSubmitData {
  /**
   * loading
   */
  loading?: boolean;
}
export interface ButtonSubmitTranslation {
  /**
  * Label of the button
  */
  label: string;
}

/**
  * Button to validate a form
  */
export const ButtonSubmit: FC<Properties<ButtonSubmitData, ButtonSubmitTranslation>> = (props) => {
  const { data: { loading } } = props;
  const { i18n: { label } } = props;

  return (

    <button
      disabled={loading}
      type="submit"
      className={`flex justify-center py-2 px-4 w-full text-sm font-medium  rounded-md border border-transparent focus:outline-none shadow-sm
       ${classNames(loading ? 'text-gray-400 bg-gray-300 ' : ' text-white bg-primary-600 hover:bg-primary-700')}`}
    >
      {label}
    </button>
  );
};
