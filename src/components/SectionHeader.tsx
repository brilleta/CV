import type { LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { WhiteText } from "./WhiteText";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  iconSize?: "sm" | "md";
}

export const SectionHeader = ({
  icon: Icon,
  title,
  iconSize = "md",
}: SectionHeaderProps) => {
  const iconClass = iconSize === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <GlassCard
      opacity="strong"
      className="flex items-center gap-2 mb-2 border border-white/40 border-l-4 border-primary rounded-md p-2 shadow-lg relative"
    >
      <Icon className={`${iconClass} text-white`} />
      <WhiteText
        as="h2"
        className={`${
          iconSize === "sm" ? "text-base" : "text-xl"
        } font-bold text-white`}
      >
        {title}
      </WhiteText>
    </GlassCard>
  );
};
