"use client";

import { toast } from "./Toast";

export default function CopyEmail({ email }: { email: string }) {
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          toast(`Copied ${email} to clipboard`);
        } catch {
          toast("Clipboard unavailable — use the mail link instead");
        }
      }}
      className="ml-3 rounded border border-white/10 bg-surface-bright px-2.5 py-1 text-white transition-colors hover:text-electric hover:underline focus:outline-none focus-visible:ring-1 focus-visible:ring-electric"
    >
      [COPY EMAIL]
    </button>
  );
}
