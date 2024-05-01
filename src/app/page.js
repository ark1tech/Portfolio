import Image from "next/image";
import Hero from "./_hero";
import Projects from "./_projects";
import Footer from "./_foot";

export default function Home() {
  return (
    <>
      <main className="gap-[4rem] min-h-[100svh] w-full flex flex-col test0">
        <Hero />
        <Projects />
      </main>
      <div className="mt-[8rem]">
        <Footer />
      </div>
    </>
  );
}
