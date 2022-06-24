import { FC, InputHTMLAttributes } from 'react';
import { Properties } from '../../utils/props';
import { classNames } from '../../utils/styles';

export interface InputTextFieldData {
  /**
   * Type attribute of the Input element. It should be a valid HTML5 input type
   */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  /**
 * Has Error
 */
  hasError?: boolean;

}
export interface InputTextFieldTranslation {
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  label?: string;
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  error?: string;
}

/**
  * Button to be use when we want the user to go to previous page
  */
export const InputTextField: FC<Properties<InputTextFieldData, InputTextFieldTranslation>> = (props) => {
  const { data: { hasError, inputProps } } = props;
  const { i18n: { label, error } } = props;

  return (

    <label htmlFor={inputProps?.name} className="block text-sm font-medium text-gray-700">
      {label}
      <div className="mt-1">
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...inputProps}
          className={`block py-2 px-3 w-full placeholder:text-gray-400
            rounded-md border-2 focus:border-2 border-gray-200
            focus:outline-none shadow-sm appearance-none sm:text-sm
            ${classNames(hasError ? ' focus:border-red-500' : 'focus:border-primary-500')}
          `}
        />
        <p className="mt-1 text-xs text-red-500">
          {hasError && error}
          &nbsp;
        </p>
      </div>
    </label>
  );
};
