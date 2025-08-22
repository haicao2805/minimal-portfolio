import { type Metadata } from "next";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ExperienceSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({
  title,
  description,
  role,
  cta,
  href,
}: {
  title: string;
  description: string;
  role: string;
  cta: string;
  href: string;
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{role}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export const metadata: Metadata = {
  title: "Experiences",
  description: "Hi, I am Cao Chi Hai",
};

export default function Education() {
  return (
    <SimpleLayout title="Education" intro="Some places I have been learned">
      <div className="space-y-20">
        <ExperienceSection title="Jan 2024 - Aug 2025">
          <Appearance
            href="https://minimaltek.com/"
            title="FPT Ho Chi Minh University"
            description="Description"
            role="Software Engineering"
            cta="Explore"
          />
        </ExperienceSection>
      </div>
    </SimpleLayout>
  );
}
