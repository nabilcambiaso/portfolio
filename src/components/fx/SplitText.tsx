// Splits text into per-character spans for the staggered headline reveal.
// Words stay intact so lines only break between words.
const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
const graphemes = (word: string) => Array.from(segmenter.segment(word), (s) => s.segment);

export default function SplitText({ text, offset = 0 }: { text: string; offset?: number }) {
  let i = offset;
  return (
    <span aria-label={text}>
      {text.split(" ").map((word, w) => (
        <span key={w} aria-hidden className="inline-block overflow-hidden whitespace-nowrap pb-[0.08em] align-bottom">
          {graphemes(word).map((char, c) => (
            <span key={c} className="split-char" style={{ "--i": i++ } as React.CSSProperties}>
              {char}
            </span>
          ))}
          {w < text.split(" ").length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
