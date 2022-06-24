import { ChevronLeftIcon } from '@heroicons/react/solid';
import { FC } from 'react';
import { Properties } from '../../utils/props';

export interface ButtonPreviousData {
  /**
   * Action to launch when click on the button
   */
  onClick: () => void;
}
export interface ButtonPreviousTranslation {
  /**
  * Label of the button
  */
  previousLabel: string;
}

/**
  * Button to be use when we want the user to go to previous page
  */
export const ButtonPrevious: FC<Properties<ButtonPreviousData, ButtonPreviousTranslation>> = (props) => {
  const { data: { onClick } } = props;
  const { i18n: { previousLabel } } = props;

  return (

    <button
      type="button"
      className="flex overflow-visible justify-center items-center text-primary-600 hover:text-primary-800 "
      onClick={() => onClick()}
    >
      <div className="inline-flex items-center p-3 bg-transparent hover:bg-gray-200 rounded-full border-2 border-primary-300 ">
        <ChevronLeftIcon className="w-5 h-5" />
      </div>
      <p className="pl-3 text-inherit">{previousLabel}</p>
    </button>
  );
};
