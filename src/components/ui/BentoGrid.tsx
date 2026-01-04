import { ReactNode } from "react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-center overflow-hidden rounded-xl",
      // light styles - using app theme colors
      "bg-[#FFFFFF] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles - using app theme colors
      "transform-gpu dark:bg-[#1A1A1A] dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
      <Icon className="h-12 w-12 origin-left transform-gpu text-[#000000] dark:text-[#FFFFFF] transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-[#000000] dark:text-[#FFFFFF]">
        {name}
      </h3>
      <p className="max-w-lg text-[#666666] dark:text-[#999999]">{description}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-[#000000]/[.03] group-hover:dark:bg-[#FFFFFF]/10" />
  </div>
);

