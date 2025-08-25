import { Card } from "@/components/Card";

interface IProps {
  title: string;
  description: string;
  role: string;
  cta: string;
  href: string;
}

export const SectionDetail: React.FC<IProps> = (props) => {
  const { title, description, role, cta, href } = props;

  return (
    <Card as="article">
      <Card.Title> {title} </Card.Title>
      <Card.Eyebrow decorate>{role}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.CallToAction href={href}>{cta}</Card.CallToAction>
    </Card>
  );
};
