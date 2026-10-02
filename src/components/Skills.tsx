import SectionHeading from "./SectionHeading";
import SkillsMatrix from "./SkillsMatrix";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-28 md:px-8">
      <SectionHeading
        align="center"
        eyebrow="Deep Engineering Stack"
        title="The Engine Room"
        description="Every layer of the stack I work across — cloud, backend, AI, frontend, data and tooling. Select a layer to inspect it."
      />
      <SkillsMatrix />
    </section>
  );
}
