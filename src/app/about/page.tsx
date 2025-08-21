import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description:
    "I’m Spencer Sharp. I live in New York City, where I design the future.",
};

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
            <p>
              Ut tellus turpis, facilisis a velit finibus, imperdiet commodo
              diam. Vivamus suscipit non augue ac gravida. Ut sagittis tellus
              ullamcorper est pulvinar rutrum. Fusce id molestie sem. In iaculis
              est non odio mollis bibendum. Aliquam non tortor sapien. Mauris
              cursus lacus quis tortor tempus, eget bibendum lorem facilisis.
              Nullam iaculis in ipsum at tempor. In at eleifend tellus. Vivamus
              lacus orci, rhoncus convallis auctor in, elementum sodales diam.
              Proin ante nibh, dapibus ut orci id, pretium mattis felis. Etiam
              non orci eget arcu molestie scelerisque in sed lorem. Vivamus
              viverra, magna accumsan lacinia blandit, mauris velit sodales
              odio, facilisis vehicula diam ligula non elit. Nullam finibus quam
              non tincidunt vestibulum. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
