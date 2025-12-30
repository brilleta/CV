import { getIconForHobby } from "@/utils/iconMapping";
import { Briefcase, Code, GraduationCap, Heart } from "lucide-react";
import React from "react";
import { CompetenceSection } from "./CompetenceSection";
import { CVHeader } from "./CVHeader";
import { ExperienceCard } from "./ExperienceCard";
import { FormationCard } from "./FormationCard";
import { GlassCard } from "./GlassCard";
import { SectionHeader } from "./SectionHeader";
import { Badge } from "./ui/badge";

interface CVProps {
  photo: string;
  firstname: string;
  lastname: string;
  title: string;
  email?: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  github?: string;
  diplomas?: Array<{
    diploma: string;
    school: string;
    year: string;
    description?: string;
  }>;
  experiences?: Array<{
    job: string;
    company: string;
    period: string;
    description: string;
    technologies?: string[];
  }>;
  skills?: {
    languages?: string[];
    frameworks?: string[];
    uiStyling?: string[];
    tools?: string[];
  };
  hobbies?: string[];
}

const CV = ({
  photo,
  firstname,
  lastname,
  title,
  email = "email@example.com",
  address = "City, France",
  linkedin = "linkedin.com/in/your-profile",
  github = "github.com/your-profile",
  diplomas = [],
  experiences = [],
  skills = {},
  hobbies = [],
}: CVProps) => {
  return (
    <div className="w-[210mm] h-[297mm] text-gray-900 mx-auto shadow-2xl overflow-hidden">
      <CVHeader
        photo={photo}
        firstname={firstname}
        lastname={lastname}
        title={title}
        email={email}
        address={address}
        linkedin={linkedin}
        github={github}
      />

      <div className="flex h-[calc(297mm-100px)]">
        <div className="flex-1 p-5 pr-3 overflow-y-auto">
          <section className="mb-4">
            <SectionHeader
              icon={Briefcase}
              title="Expérience Professionnelle"
            />
            <div className="space-y-1.5">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </section>

          <section>
            <SectionHeader icon={GraduationCap} title="Formation" />
            <div className="space-y-1.5">
              {diplomas.map((diploma, index) => (
                <FormationCard key={index} {...diploma} />
              ))}
            </div>
          </section>
        </div>

        <div className="w-64 p-4 border-white/50 overflow-y-auto relative">
          <section className="mb-4">
            <SectionHeader icon={Code} title="Compétences" iconSize="sm" />
            <div className="space-y-2">
              {skills.languages && (
                <CompetenceSection
                  title="Langages"
                  items={skills.languages}
                  variant="secondary"
                />
              )}
              {skills.frameworks && (
                <CompetenceSection
                  title="Frameworks"
                  items={skills.frameworks}
                  variant="secondary"
                />
              )}
              {skills.uiStyling && (
                <CompetenceSection
                  title="UI/Styling"
                  items={skills.uiStyling}
                  variant="secondary"
                />
              )}
              {skills.tools && (
                <CompetenceSection
                  title="Outils"
                  items={skills.tools}
                  variant="secondary"
                />
              )}
            </div>
          </section>

          <section>
            <SectionHeader
              icon={Heart}
              title="Centres d'intérêt"
              iconSize="sm"
            />
            <GlassCard
              className="border border-white/40 rounded-md p-2 relative"
              opacity="light"
            >
              <div className="flex flex-wrap gap-1">
                {hobbies.map((hobby, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-[10px] py-0 h-4"
                  >
                    {React.createElement(getIconForHobby(hobby))}
                    {hobby}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
