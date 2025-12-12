import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { WhiteText } from "./WhiteText";

interface CVHeaderProps {
  photo: string;
  firstname: string;
  lastname: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
}

interface ContactItemProps {
  icon: typeof Mail;
  text: string;
}

const ContactItem = ({ icon: Icon, text }: ContactItemProps) => (
  <div className="flex items-center gap-1">
    <Icon className="w-3 h-3 text-white" />
    <WhiteText as="span" className="font-medium">
      {text}
    </WhiteText>
  </div>
);

export const CVHeader = ({
  photo,
  firstname,
  lastname,
  title,
  email,
  phone,
  address,
  linkedin,
  github,
}: CVHeaderProps) => {
  return (
    <GlassCard
      opacity="strong"
      className="flex gap-4 w-full justify-between border-b border-white/50 shadow-2xl items-center relative"
    >
      <img
        src={photo}
        alt={`${firstname} ${lastname}`}
        className="w-30 h-30 object-cover"
      />

      <div className="flex-1 min-w-0">
        <WhiteText
          as="h1"
          className="text-2xl font-bold text-white leading-tight"
        >
          {firstname} {lastname}
        </WhiteText>
        <WhiteText as="p" className="text-sm text-white font-medium mb-1">
          {title}
        </WhiteText>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 w-full text-xs text-white">
          <ContactItem icon={Mail} text={email} />
          <ContactItem icon={Phone} text={phone} />
          <ContactItem icon={MapPin} text={address} />
          <ContactItem icon={Linkedin} text={linkedin} />
          <ContactItem icon={Github} text={github} />
        </div>
      </div>
    </GlassCard>
  );
};
