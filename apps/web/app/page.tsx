"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { GlowCard } from "@repo/ui/glow-card";

const themes = ["default", "orange", "sky"] as const;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Ready for review");

  async function loadData() {
    setLoading(true);
    try {
      const res = await fetch("/api");
      const text = await res.text();
      setMessage(text || "Done");
    } catch {
      setMessage("Request failed");
    } finally {
      setLoading(false);
    }
  }

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

        <GlowCard className="w-full max-w-md" loading={!loading}>
          <p className="text-lg font-bold text-foreground">Glow Card</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-secondary">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-secondary/20 text-secondary">
              {loading ? "…" : "✓"}
            </span>
            {message}
          </div>
          <Button
            type="button"
            className="mt-4"
            disabled={loading}
            onClick={() => {
              void loadData();
            }}
          >
            {loading ? "Loading…" : "Fetch /api"}
          </Button>
        </GlowCard>
      </section>
    </main>
  );
}
