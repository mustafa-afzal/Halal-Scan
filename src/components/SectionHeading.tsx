interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-[26px] sm:text-[34px] font-semibold tracking-[-0.03em] leading-[1.15] text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] sm:text-[16px] text-slate-500 leading-[1.65]">
          {description}
        </p>
      )}
    </div>
  );
}
