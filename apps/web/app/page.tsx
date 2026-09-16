"use client";

import { Button } from "@repo/ui/button";
import { GlowCard } from "@repo/ui/glow-card";

const themes = ["default", "orange", "sky"] as const;

export default function Home() {
  return (
    <main className="flex min-h-0 w-full flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center gap-6">
        <div className="flex gap-3">
          {themes.map((theme) => (
            <Button
              key={theme}
              type="button"
              className="bg-secondary"
              onClick={() => {
                document.documentElement.dataset.theme = theme;
              }}
            >
              {theme}
            </Button>
          ))}
        </div>

        <GlowCard className="w-full max-w-md">
          <p className="text-lg font-medium text-foreground">
            brand가 기본 톤, secondary가 테두리를 따라 빛납니다
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-secondary">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-secondary/20 text-secondary">
              ✓
            </span>
            Ready for review
          </div>
        </GlowCard>
      </section>
    </main>
  );
}
