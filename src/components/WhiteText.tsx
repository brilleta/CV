import type { ReactNode } from "react";

interface WhiteTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const textShadowStyle = {
  textShadow: "0 2px 4px rgba(0,0,0,0.6)",
};

export const WhiteText = ({
  children,
  className = "",
  as: Component = "div",
}: WhiteTextProps) => {
  return (
    <Component className={className} style={textShadowStyle}>
      {children}
    </Component>
  );
};
