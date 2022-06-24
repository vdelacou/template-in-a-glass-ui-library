import { ReactElement } from 'react';

export const renderCurrent = (): ReactElement => (
  <div className="flex relative justify-center items-center">
    <span className="flex absolute p-px w-5 h-5">
      <span className="w-full h-full bg-primary-200 rounded-full" />
    </span>
    <span className="block relative w-2.5 h-2.5 bg-primary-600 rounded-full" />
  </div>
);
