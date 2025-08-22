import { SocialLink } from "./SocialLink";

interface IProps {
  socials: {
    id: string;
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
}

export const SocialLinks: React.FC<IProps> = (props) => {
  const { socials } = props;

  return (
    <ul role="list">
      {socials.map((social) => (
        <SocialLink
          key={social.id}
          href={social.href}
          icon={social.icon}
          className="mt-4"
        >
          {social.title}
        </SocialLink>
      ))}
    </ul>
  );
};
