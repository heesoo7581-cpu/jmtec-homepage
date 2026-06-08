type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <div className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</div>
      <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600">{description}</p>
    </div>
  );
}
