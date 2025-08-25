import { type Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";
import { Section } from "./components/Section";
import { SectionDetail } from "./components/SectionDetail";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Hi, I am Cao Chi Hai",
};

const LAYOUT_TITLE = "Where I’ve Worked";
const LAYOUT_INTRO = "Some places I have been work";

const experience = [
  {
    id: "mt",
    title: "Minimal Technology",
    description: "Let awesome technology minimize your work!",
    role: "Full-stack Developer",
    cta: "Explore",
    href: "https://minimaltek.com/",
    time: "Jan 2024 - Aug 2025",
  },
  {
    id: "comic",
    title: "Comic One",
    description:
      "A Web3-as-a-service platform for webtoons and other Web2 content platforms to generate revenue from their users and establish their user loyalty programs",
    role: "Full-stack Developer",
    cta: "Explore",
    href: "https://comic.one/",
    time: "Sep 2022 - Aug 2023",
  },
  {
    id: "dayone",
    title: "Dayone Software Technology",
    description:
      "A Web3-as-a-service platform for webtoons and other Web2 content platforms to generate revenue from their users and establish their user loyalty programs",
    role: "Full-stack Developer",
    cta: "Explore",
    href: "https://dayoneteams.com/",
    time: "Dec 2021 - May 2022",
  },
];

export default function Speaking() {
  return (
    <SimpleLayout title={LAYOUT_TITLE} intro={LAYOUT_INTRO}>
      <div className="space-y-20">
        {experience.map((exp) => {
          return (
            <Section key={exp.id} title={exp.time}>
              <SectionDetail
                href={exp.href}
                title={exp.title}
                description={exp.description}
                role={exp.role}
                cta={exp.cta}
              />
            </Section>
          );
        })}
      </div>
    </SimpleLayout>
  );
}
