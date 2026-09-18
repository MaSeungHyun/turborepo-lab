"use client";

import { useEffect, useState } from "react";
import { Button } from "@repo/ui/Button";
import { GlowCard } from "@repo/ui/GlowCard";
import Icon from "@repo/ui/Icon";

const themes = ["default", "orange", "ocean"] as const;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Ready for review");

  useEffect(() => {
    window.addEventListener("deviceorientation", (event) => {
      console.log(event.alpha, event.beta, event.gamma);
    });
    return () => {
      window.removeEventListener("deviceorientation", (event) => {
        console.log(event.alpha, event.beta, event.gamma);
      });
    };
  }, []);

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
              className="bg-primary"
              onClick={() => {
                document.documentElement.dataset.theme = theme;
              }}
            >
              {theme}
            </Button>
          ))}
        </div>

        <GlowCard className="w-full max-w-md" loading={!loading}>
          <p className="text-lg font-bold text-text-primary">Glow Card</p>
          <div className="text-md mt-4 flex items-center gap-2 text-secondary">
            <span className="inline-flex items-center justify-center rounded-full bg-secondary/30 p-0.5 text-text-secondary">
              <Icon icon="Check" />
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
