export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "start",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "start" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-start"}>
      {eyebrow ? (
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display mt-3 text-3xl sm:text-[2.5rem]/[1.15] rtl:sm:leading-[1.4] ${
          dark ? "text-paper" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 max-w-2xl text-base/7 ${
            dark ? "text-sand/80" : "text-ink/70"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
