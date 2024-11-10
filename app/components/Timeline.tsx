import React from "react";

type TimelineStep = {
  date: string;
  title: string;
  status?: string;
  icon: JSX.Element;
  highlight?: boolean;
};

type TimelineProps = {
  steps: TimelineStep[];
};

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="relative flex flex-col items-start">
      <div
        className="absolute left-4 top-0 h-full w-0.5 bg-slate-200"
        aria-hidden="true"
      ></div>

      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start w-full mb-8 last:mb-0 relative"
        >
          <div
            className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 border-white 
                       ${step.highlight ? "bg-rose-500" : "bg-indigo-500"}`}
          >
            {step.icon}
          </div>

          <div className="ml-6 flex-grow">
            <div className="text-sm font-semibold text-slate-400">
              {step.date}
            </div>
            <div
              className={`text-base font-medium ${
                step.highlight ? "text-rose-600" : "text-slate-800"
              }`}
            >
              {step.title}
            </div>
            {step.status && (
              <div className="text-sm text-slate-500">{step.status}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
