export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="section-label">{eyebrow}</p>
      <h2
        className={`font-serif-display mt-3 text-3xl sm:text-4xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <div
        className={`hairline mt-5 w-24 ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
