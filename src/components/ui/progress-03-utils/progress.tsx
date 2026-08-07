"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

function Progress({ className, value = 0, ...props }: ProgressProps) {
  return (
    <div
      data-slot="progress"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("relative w-full", className)}
      {...props}
    >
      <div
        data-slot="progress-track"
        className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800"
      >
        <div
          data-slot="progress-indicator"
          className="h-full rounded-full bg-slate-900 transition-all duration-1000 ease-out dark:bg-white"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export { Progress };
