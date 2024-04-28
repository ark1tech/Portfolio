import Image from "next/image";
import Hero from "./hero";
import Projects from "./projects";

export default function Home() {
  return (
    <main className="min-h-[100svh] pt-[3rem] w-full flex flex-col gap-[4rem]">
      <Hero />
      <div className="flex flex-col gap-[2rem]">
        <Projects />
      </div>
    </main>
  );
}
