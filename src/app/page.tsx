import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Full-stack developer with 3 years of experience in building systems
            and solving technical challenges. Contributed to various high-impact
            projects including financial trading, ERP, HRM, data processing
            system. Strong logical thinking with a passion for life-long
            learning and tackling complex challenges. Evolved from
            implementation-focused coding to developing deeper architectural
            understanding, aspiring to become a software engineer who not only
            builds but thoroughly understands the systems behind the solutions.
          </p>
        </div>
      </Container>
    </>
  );
}
