"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <main className="flex min-h-0 w-full flex-1 flex-col">
      <section className="flex flex-1 items-center justify-center">
        {message && <p className="text-2xl font-bold">{message}😊</p>}
      </section>
    </main>
  );
}
