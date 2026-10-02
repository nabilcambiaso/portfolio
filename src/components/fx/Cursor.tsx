"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${mouseX}px`;
        dot.current.style.top = `${mouseY}px`;
      }
      const interactive = (e.target as HTMLElement).closest(
        "a, button, input, [data-cursor]",
      );
      follower.current?.classList.toggle("is-hovering", Boolean(interactive));
    };

    const loop = () => {
      followerX += (mouseX - followerX) * 0.18;
      followerY += (mouseY - followerY) * 0.18;
      if (follower.current) {
        follower.current.style.left = `${followerX}px`;
        follower.current.style.top = `${followerY}px`;
      }
      raf = requestAnimationFrame(loop);
    };

    dot.current?.classList.remove("hidden");
    follower.current?.classList.remove("hidden");
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="custom-cursor-dot hidden" aria-hidden />
      <div ref={follower} className="custom-cursor-follower hidden" aria-hidden />
    </>
  );
}
