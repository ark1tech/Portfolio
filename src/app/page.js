import Image from "next/image";
import Hero from "./_hero";
import Projects from "./_projects";

export default function Home() {
  return (
    <main className="min-h-[100svh] w-full flex flex-col gap-[4rem]">
      <Hero />
      <div className="min-h-[90svh] pb-[2rem]">
        <Projects />
      </div>
    </main>
  );
}
