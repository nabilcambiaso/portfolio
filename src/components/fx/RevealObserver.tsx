"use client";

import { useEffect } from "react";

// Adds `is-visible` to every `.reveal` / `.split-reveal` element as it scrolls into view.
export default function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .split-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
