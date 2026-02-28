import Hero from "./_hero";
import Projects from "./_projects";
import Footer from "./_foot";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <main className="gap-[3rem] min-h-[100svh] w-full flex flex-col test0">
        <Hero />
        <Projects />
      </main>
      <div className="mt-[4rem]">
        <Footer />
      </div>
    </div>
  );
}
