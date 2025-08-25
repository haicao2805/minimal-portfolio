import { type Metadata } from "next";

import { SimpleLayout } from "@/components/SimpleLayout";
import { Section } from "./components/Section";
import { SectionDetail } from "./components/SectionDetail";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Hi, I am Cao Chi Hai",
};

const LAYOUT_TITLE = "Education";
const LAYOUT_INTRO = "Some places I have been learned";

const education = [
  {
    id: "fpt",
    title: "FPT HO CHI MINH UNIVERSITY - FPT HCMC",
    gpa: "- GPA: 8.28/10",
    major: "Major: Bachelor of Software Engineering",
    cta: "Explore",
    href: "https://daihoc.fpt.edu.vn/en/",
    time: "Sep 2019 - Jul 2023",
  },
  {
    id: "kdu",
    title: "KDU PENANG UNIVERSITY COLLEGE - UOW PENANG",
    gpa: "- Status: Passed",
    major: "Certificate: English Enhancement Programme",
    cta: "Explore",
    href: "https://www.uow.edu.my/campuses/about-the-campus/uow-malaysia-kdu-penang-university-college/",
    time: "Feb 2020 - Mar 2020",
  },
];

export default function Education() {
  return (
    <SimpleLayout title={LAYOUT_TITLE} intro={LAYOUT_INTRO}>
      <div className="space-y-20">
        {education.map((edu) => {
          return (
            <Section key={edu.id} title={edu.time}>
              <SectionDetail
                href={edu.href}
                title={edu.title}
                gpa={edu.gpa}
                major={edu.major}
                cta={edu.cta}
              />
            </Section>
          );
        })}
      </div>
    </SimpleLayout>
  );
}
