import { Card } from "@/components/Card";

interface IProps {
  title: string;
  gpa: string;
  major: string;
  cta: string;
  href: string;
}

export const SectionDetail: React.FC<IProps> = (props) => {
  const { title, gpa, major, cta, href } = props;

  return (
    <Card as="article">
      <Card.Title> {title} </Card.Title>
      <Card.Eyebrow decorate>{major}</Card.Eyebrow>
      <Card.Description>{gpa}</Card.Description>
      <Card.CallToAction href={href}>{cta}</Card.CallToAction>
    </Card>
  );
};
