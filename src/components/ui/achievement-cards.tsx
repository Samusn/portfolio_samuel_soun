import * as React from "react";
import { cn } from "@/lib/utils";

export interface AwardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AwardCard = React.forwardRef<HTMLDivElement, AwardCardProps>(
  ({ className, icon, title, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex min-w-[200px] items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4",
          "transition-all duration-300 ease-in-out hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-sm",
          "",
          className
        )}
        {...props}
      >
        <div className="flex-shrink-0 text-slate-500">{icon}</div>
        <div className="flex flex-col text-left">
          <p className="text-[11px] font-medium text-slate-400">{title}</p>
          <p className="text-sm font-semibold text-slate-700">{description}</p>
        </div>
      </div>
    );
  }
);
AwardCard.displayName = "AwardCard";

export { AwardCard };
