import {
  Code2,
  Database,
  Globe,
  Server,
  Palette,
  FileJson,
  Coffee,
  type LucideIcon,
  GitBranch,
  Container,
  Box,
  Cloud,
  FileCode,
  Terminal,
  Zap,
  Layers,
  Cpu,
  Baby,
  Gamepad2,
  Tv,
  Book,
  Dumbbell,
  Target,
  Camera,
  Plane,
  Sparkles,
  Music,
  Bike,
  Trophy,
  Leaf,
  Atom,
  FlaskConical,
  LineSquiggle,
  Cat,
  Figma,
  Braces,
} from "lucide-react";

const technologyIcons: Record<string, LucideIcon> = {
  // Langages
  Java: Coffee,
  Python: Code2,
  JavaScript: FileJson,
  TypeScript: FileCode,
  "HTML5/CSS3": Globe,
  SQL: Database,

  // Frameworks
  React: Atom,
  "Spring Boot": Leaf,
  FastAPI: Zap,
  Flask: FlaskConical,
  TailwindCSS: Palette,

  // Outils
  Git: GitBranch,
  Docker: Container,
  Bash: Terminal,
  "Pack Office": FileCode,
  OnShape: Box,
  VSCode: Code2,
  PostgreSQL: Database,
  MongoDB: Database,
  MySQL: Database,
  AWS: Cloud,

  // UI/Styling
  Lucide: LineSquiggle,
  "shadcn/ui": Braces,
  "Framer Motion": Zap,
  Zustand: Cat,
  Figma: Figma,

  // Technologies diverses
  OCR: FileCode,
  Dashboard: Layers,
  Cloud: Cloud,
  "Machine Learning": Cpu,
  Microservices: Server,
  IA: Cpu,
};

const hobbyIcons: Record<string, LucideIcon> = {
  Papa: Baby,
  "Jeux de société": Trophy,
  "Jeux vidéos": Gamepad2,
  Cinéma: Tv,
  Lecture: Book,
  Musculation: Dumbbell,
  Padel: Target,
  Photographie: Camera,
  Voyages: Plane,
  "Open Source": Code2,
  "Course à pied": Bike,
  Musique: Music,
};

export const getIconForTechnology = (tech: string): LucideIcon => {
  return technologyIcons[tech] || Code2;
};

export const getIconForHobby = (hobby: string): LucideIcon => {
  return hobbyIcons[hobby] || Sparkles;
};
