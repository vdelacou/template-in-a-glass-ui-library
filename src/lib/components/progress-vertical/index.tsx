import { CheckIcon } from '@heroicons/react/solid';
import { FC, ReactElement } from 'react';
import { classNames } from '../../utils/styles';

export interface ProgressVerticalStep {
  order: number;
  name: string;
  status: 'WAITING' | 'CURRENT' | 'COMPLETE';
}

export interface ProgressVerticalData {
  steps: ProgressVerticalStep[];
}

const renderWaiting = (step: ProgressVerticalStep, stepIndex: number, total: number): ReactElement => (
  <>
    {stepIndex !== total - 1 ? (<div className="absolute top-4 left-4 -ml-px w-0.5 h-full bg-gray-400" />) : undefined}
    <div className="group flex relative items-center">
      <span className="flex items-center h-9">
        <span className="flex relative z-10 justify-center items-center w-8 h-8 bg-transparent rounded-full border-2 border-gray-400 ">
          <span className="w-2.5 h-2.5 bg-transparent rounded-full" />
        </span>
      </span>
      <span className="flex flex-col ml-4 min-w-0">
        <span className="text-xl font-medium tracking-wide leading-6 text-gray-400">{step.name}</span>
      </span>
    </div>
  </>
);

const renderCurrent = (step: ProgressVerticalStep, stepIndex: number, total: number): ReactElement => (
  <>
    {stepIndex !== total - 1 ? (<div className="absolute top-8 left-4 -ml-px w-0.5 h-12 bg-gray-400" />) : undefined}
    <div className="group flex relative items-center">
      <span className="flex items-center h-9">
        <span className="flex relative z-10 justify-center items-center w-8 h-8 bg-transparent rounded-full border-2 border-gray-100">
          <span className="w-2.5 h-2.5 bg-white rounded-full" />
        </span>
      </span>
      <span className="flex flex-col ml-4 min-w-0">
        <span className="text-xl font-medium tracking-wide leading-6">{step.name}</span>
      </span>
    </div>
  </>
);

const renderComplete = (step: ProgressVerticalStep, stepIndex: number, total: number): ReactElement => (
  <>
    {stepIndex !== total - 1 ? (<div className="absolute top-8 left-4 -ml-px w-0.5 h-12 bg-white" />) : undefined}
    <div className="group flex relative items-center">
      <span className="flex items-center h-9">
        <span className="flex relative z-10 justify-center items-center w-8 h-8 bg-transparent rounded-full border-2 border-white">
          <CheckIcon className="w-5 h-5" />
        </span>
      </span>
      <span className="flex flex-col ml-4 min-w-0">
        <span className="text-xl font-medium tracking-wide leading-6 ">{step.name}</span>
      </span>
    </div>
  </>
);

export const ProgressVertical: FC<{ data: ProgressVerticalData }> = (props) => {
  const { data: { steps } } = props;

  steps.sort((a, b) => a.order - b.order);

  return (
    <nav className="py-12">
      <ol className="overflow-hidden text-white">
        {steps.map((step, stepIndex) => (
          <li key={`${step.name}${step.order}`} className={classNames(stepIndex !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'WAITING' && renderWaiting(step, stepIndex, steps.length)}
            {step.status === 'CURRENT' && renderCurrent(step, stepIndex, steps.length)}
            {step.status === 'COMPLETE' && renderComplete(step, stepIndex, steps.length)}
          </li>
        ))}
      </ol>
    </nav>
  );
};
