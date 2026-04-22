import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type Props = {
  num?: string;
  eyebrow: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  align?: "split" | "stacked";
  className?: string;
};

export function SectionHead({ num, eyebrow, title, sub, align = "split", className }: Props) {
  return (
    <div
      className={cn(
        align === "split"
          ? "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end mb-10 md:mb-16"
          : "flex flex-col gap-5 mb-10 md:mb-16 max-w-2xl",
        className
      )}
    >
      <Reveal>
        <div className="eyebrow text-ink-3 mb-4 flex items-center gap-3">
          {num && <span className="text-accent">{num} /</span>}
          <span>{eyebrow}</span>
        </div>
        <h2 className="h-section text-ink">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p className="text-[15.5px] leading-relaxed text-ink-2 max-w-md md:ml-auto">
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
