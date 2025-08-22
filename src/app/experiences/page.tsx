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

export default function Speaking() {
  return (
    <SimpleLayout title="Experiences" intro="Some places I have been work">
      <div className="space-y-20">
        <ExperienceSection title="Jan 2024 - Aug 2025">
          <Appearance
            href="https://minimaltek.com/"
            title="Minimal Technology"
            description="Description"
            role="Full-stack Developer"
            cta="Explore"
          />
        </ExperienceSection>

        <ExperienceSection title="Sep 2022 - Aug 2023">
          <Appearance
            href="https://comic.one/"
            title="Comic One"
            description="Description"
            role="Full-stack Developer"
            cta="Explore"
          />
        </ExperienceSection>

        <ExperienceSection title="Dec 2021 - May 2022">
          <Appearance
            href="https://dayoneteams.com/"
            title="Dayone Software Technology"
            description="Description"
            role="Software Engineer Intern / Backend Developer"
            cta="Explore"
          />
        </ExperienceSection>
      </div>
    </SimpleLayout>
  );
}
