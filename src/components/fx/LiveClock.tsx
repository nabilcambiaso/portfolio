"use client";

import { useEffect, useState } from "react";

function format(timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export default function LiveClock({
  timeZone = "Africa/Casablanca",
  className,
}: {
  timeZone?: string;
  className?: string;
}) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(format(timeZone));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className={className} suppressHydrationWarning>
      {time}
    </span>
  );
}

export function ScrollVelocity() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const on = (e: Event) => setV((e as CustomEvent<number>).detail);
    window.addEventListener("portfolio:velocity", on);
    return () => window.removeEventListener("portfolio:velocity", on);
  }, []);
  return <span className="text-electric">{v}px/s</span>;
}
