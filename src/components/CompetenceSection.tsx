import { getIconForTechnology } from "@/utils/iconMapping";
import React from "react";
import { GlassCard } from "./GlassCard";
import { Badge } from "./ui/badge";
import { WhiteText } from "./WhiteText";

interface CompetenceSectionProps {
  title: string;
  items: string[];
  variant?: "default" | "secondary" | "outline";
}

export const CompetenceSection = ({
  title,
  items,
  variant = "default",
}: CompetenceSectionProps) => {
  return (
    <GlassCard
      className="border border-white/40 rounded-md p-2 relative"
      opacity="light"
    >
      <WhiteText as="h3" className="font-semibold text-xs mb-1 text-white">
        {title}
      </WhiteText>
      <div className="flex flex-wrap gap-1">
        {items.map((item, i) => (
          <Badge key={i} variant={variant} className="text-[10px] py-0 h-4">
            {React.createElement(getIconForTechnology(item))}
            {item}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
};
