import { FC, ReactElement } from 'react';

export interface OnboardingLayoutProperties {
  logo: ReactElement;
}

export const OnboardingLayout: FC<{ component: OnboardingLayoutProperties }> = (props) => {
  const { component: { logo } } = props;

  return (
    <div className="flex flex-col md:flex-row">
      <aside className=" w-full min-w-fit md:flex md:fixed md:inset-y-0  md:flex-col md:w-80 md:max-w-md md:h-full">
        <div className="flex flex-col flex-1 min-h-0 bg-gradient-to-br from-primary-900 to-primary-700">
          <div className="flex overflow-y-auto flex-col flex-1">
            <div className="p-4 w-full">
              {/* <div className="h-8 rounded-lg border-4 border-gray-200 border-dashed" /> */}
              {logo}
            </div>
            <div className="hidden py-8 w-full md:block ">
              <div className="p-4 w-full">
                <div className="h-64 rounded-lg border-4 border-gray-200 border-dashed" />
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-col w-full md:pl-80 ">
        <div className="flex flex-col justify-between items-center sm:flex-row">
          <div className="p-4 w-full">
            <div className="h-8 rounded-lg border-4 border-gray-200 border-dashed" />
          </div>
          <div className="p-4 w-full">
            <div className="h-8 rounded-lg border-4 border-gray-200 border-dashed" />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-center py-4 w-full">
            <div className="p-4 w-full">
              <div className="h-96 rounded-lg border-4 border-gray-200 border-dashed" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
