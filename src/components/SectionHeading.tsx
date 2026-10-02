import SplitText from "./fx/SplitText";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "split" | "center";
  compact?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "split", compact }: Props) {
  const size = compact ? "text-2xl md:text-4xl normal-case" : "text-3xl md:text-5xl uppercase";
  if (align === "center") {
    return (
      <div className="split-reveal mx-auto mb-14 max-w-3xl text-center">
        <div className="mb-2 font-mono text-xs tracking-widest text-electric uppercase">{eyebrow}</div>
        <h2 className={`font-syne font-bold tracking-tight text-white ${size}`}>
          <SplitText text={title} />
        </h2>
        {description && <p className="reveal mt-3 font-mono text-sm text-slate-400">{description}</p>}
      </div>
    );
  }
  return (
    <div className="split-reveal mb-16 flex flex-col justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end">
      <div>
        <div className="mb-2 font-mono text-xs tracking-widest text-electric uppercase">{eyebrow}</div>
        <h2 className={`font-syne font-bold tracking-tight text-white ${size}`}>
          <SplitText text={title} />
        </h2>
      </div>
      {description && <p className="reveal max-w-md font-mono text-sm text-slate-400">{description}</p>}
    </div>
  );
}
