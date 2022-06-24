import { FC } from 'react';
import { ProgressVertical, ProgressVerticalData } from '../../components/progress-vertical';

export interface VerticalNavigationSideBarData {
  verticalNavigationStepData: ProgressVerticalData;
}

export interface VerticalNavigationStepTranslation {
  title: string;
  subTitle: string;
}

export const VerticalNavigationSideBar: FC<{ data: VerticalNavigationSideBarData, i18n: VerticalNavigationStepTranslation }> = (props) => {
  const { data: { verticalNavigationStepData } } = props;
  const { i18n: { title, subTitle } } = props;

  return (
    <div className="w-full">
      <h2 className="pt-3 pb-2 text-2xl font-medium leading-9 text-white">
        {title}
      </h2>
      <span className="block m-0 text-sm font-normal leading-6 text-primary-200">
        {subTitle}
      </span>
      <ProgressVertical data={verticalNavigationStepData} />
    </div>
  );
};
