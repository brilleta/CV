import { Badge } from "./ui/badge";
import { GlassCard } from "./GlassCard";
import { WhiteText } from "./WhiteText";
import { CalendarIcon } from "lucide-react";

interface FormationCardProps {
  diploma: string;
  school: string;
  year: string;
  description?: string;
}

export const FormationCard = ({
  diploma,
  school,
  year,
  description,
}: FormationCardProps) => {
  return (
    <GlassCard className="border border-white/40 rounded-md p-2 relative">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <WhiteText
            as="h3"
            className="font-bold text-xs text-white leading-tight"
          >
            {diploma}
          </WhiteText>
          <WhiteText
            as="p"
            className="text-[11px] text-white font-bold leading-tight"
          >
            {school}
          </WhiteText>
          {description && (
            <WhiteText
              as="p"
              className="text-[10px] text-white mt-0.5 leading-tight font-medium"
            >
              {description}
            </WhiteText>
          )}
        </div>
        <Badge
          variant="secondary"
          className="text-[10px] py-0 h-4 shrink-0 ml-1"
        >
          <CalendarIcon />
          {year}
        </Badge>
      </div>
    </GlassCard>
  );
};
