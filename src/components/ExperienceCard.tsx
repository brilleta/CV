import { Badge } from "./ui/badge";
import { GlassCard } from "./GlassCard";
import { WhiteText } from "./WhiteText";
import { CalendarIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { getIconForTechnology } from "../utils/iconMapping";
import React from "react";

interface ExperienceCardProps {
  job: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export const ExperienceCard = ({
  job,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <GlassCard className="border border-white/40 rounded-md p-2">
      <div className="flex justify-between items-start mb-0.5">
        <div className="">
          <WhiteText as="h3" className="font-bold text-xs text-white">
            {job} - {company}
          </WhiteText>
        </div>
        <Badge
          variant="secondary"
          className="text-[10px] py-0 h-4 shrink-0 ml-1"
        >
          <CalendarIcon />
          {period}
        </Badge>
      </div>
      <Separator className="my-1 border-white/30" />
      <WhiteText
        as="p"
        className="text-[11px] mb-1 text-white text-justify font-medium"
      >
        {description}
      </WhiteText>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-0.5">
          {technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="text-[10px] py-0 h-3.5"
            >
              {React.createElement(getIconForTechnology(tech))}
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </GlassCard>
  );
};
