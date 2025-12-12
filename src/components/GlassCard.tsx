import type { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  opacity?: "light" | "medium" | "strong";
}

const opacityStyles = {
  light: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 100%)",
    backdropFilter: "blur(20px) saturate(150%)",
    WebkitBackdropFilter: "blur(20px) saturate(150%)",
    boxShadow:
      "0 4px 12px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 0 rgba(255,255,255,0.3)",
  },
  medium: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.25) 100%)",
    backdropFilter: "blur(25px) saturate(150%)",
    WebkitBackdropFilter: "blur(25px) saturate(150%)",
    boxShadow:
      "0 4px 16px 0 rgba(31, 38, 135, 0.12), inset 0 1px 0 0 rgba(255,255,255,0.3)",
  },
  strong: {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.2) 100%)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    boxShadow:
      "0 4px 16px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 0 rgba(255,255,255,0.4)",
  },
};

export const GlassCard = ({
  children,
  className = "",
  opacity = "medium",
}: GlassCardProps) => {
  return (
    <div className={className} style={opacityStyles[opacity] as CSSProperties}>
      {children}
    </div>
  );
};
