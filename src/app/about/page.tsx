import { type Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";
import { SocialLinkConstants } from "@/libs/constants";
import { SocialLinks } from "./components/SocialLinks";
import { Technologies } from "./components/Technologies";

export const metadata: Metadata = {
  title: "About",
  description: "I’m Cao Chi Hai",
};

const socials = [
  {
    id: "GitHub",
    title: "Follow on GitHub",
    href: SocialLinkConstants.GITHUB,
    icon: GitHubIcon,
  },
  {
    id: "LinkedIn",
    title: "Follow on LinkedIn",
    href: SocialLinkConstants.LINKEDIN,
    icon: LinkedInIcon,
  },
  {
    id: "Email",
    title: "haicao2805@gmail.com",
    href: SocialLinkConstants.GMAIL,
    icon: MailIcon,
  },
];

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I am Cao Chi Hai and I am just a IT guy who want to be rich.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
              porttitor lectus. Aliquam a tellus interdum, maximus arcu sed,
              feugiat massa. Nulla ultrices justo a sem porttitor, volutpat
              pharetra mi iaculis. Vivamus egestas ex eget luctus eleifend.
              Phasellus rutrum eget nulla faucibus elementum. Morbi eu tincidunt
              nulla. Curabitur magna tortor, molestie in ultricies eget, finibus
              quis arcu. Nullam in vulputate dolor, vitae vehicula diam. Morbi
              molestie tempus posuere. Donec ac tortor scelerisque, ornare diam
              ac, aliquet dui. Etiam vel neque viverra, viverra augue eu,
              posuere augue. Nam maximus, justo sed tristique fringilla, diam
              metus venenatis tortor, eget mollis elit lacus nec leo. Nullam
              bibendum luctus velit, sed vehicula diam commodo a.
            </p>
            <p>
              Phasellus vitae bibendum nisl. Aenean venenatis ut magna ac
              rutrum. Nam convallis sagittis fermentum. Donec sit amet interdum
              ante. Aliquam interdum, ipsum ut maximus dignissim, libero arcu
              fringilla odio, in viverra magna erat nec nisl. Cras consequat
              dolor vel consectetur sollicitudin. Maecenas ut augue sed neque
              mattis congue. Donec cursus, nunc eget malesuada elementum, lectus
              velit commodo ante, eget venenatis ligula felis non orci.
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <SocialLinks socials={socials} />
        </div>
      </div>

      <div>
        <Technologies />
      </div>
    </Container>
  );
}
