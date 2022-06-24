import { FC } from 'react';
import { renderComplete } from './render-complete';
import { renderCurrent } from './render-current';
import { renderWaiting } from './render-waiting';

export interface ProgressHorizontalStep {
  order: number;
  status: 'WAITING' | 'CURRENT' | 'COMPLETE';
}

export interface ProgressHorizontalData {
  steps: ProgressHorizontalStep[];
}

export interface ProgressHorizontalTranslation {
  stepLabel: (currentIndex: number, total: number) => string;
}

export const ProgressHorizontal: FC<{ data: ProgressHorizontalData, i18n: ProgressHorizontalTranslation }> = (props) => {
  const { data: { steps } } = props;
  const { i18n: { stepLabel } } = props;

  steps.sort((a, b) => a.order - b.order);
  const currentIndex = steps.findIndex((step) => step.status === 'CURRENT') + 1;

  return (
    <nav className="flex justify-center items-center">
      <p className="text-sm font-medium">
        {stepLabel(currentIndex, steps.length)}
      </p>
      <ol className="flex items-center ml-8 space-x-5">
        {steps.map((step) => (
          <li key={`${step.status}${step.order}`}>
            {step.status === 'WAITING' && renderWaiting()}
            {step.status === 'CURRENT' && renderCurrent()}
            {step.status === 'COMPLETE' && renderComplete()}
          </li>
        ))}
      </ol>
    </nav>
  );
};
