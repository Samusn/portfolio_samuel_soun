import { BlurFade } from "@/components/ui/blur-fade";
import * as React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="flex flex-col gap-4 text-left">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
            Samuel Soun
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none text-white">
            Software Developer
          </span>
        </BlurFade>
      </div>
    </main>
  );
}