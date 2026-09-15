"use client";

import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useLayoutEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);
  
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-start overflow-hidden bg-background text-foreground">
      <section className="flex h-full w-full flex-1 flex-col items-center justify-center">
        {message && <p className="text-2xl font-bold">{message}😊</p>}
      </section>
    </main>
  );
}
