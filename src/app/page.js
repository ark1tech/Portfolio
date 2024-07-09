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
        <p className="text-xs text-[#313131] font-['JetBrains_Mono'] w-full text-center text-pretty">
          &#47;&#47; This serves as my temporary portfolio while I&rsquo;m
          revamping the{" "}
          <a
            className="text-xs text-[#3a3a3a] font-['JetBrains_Mono'] underline-offset-2 underline hover:text-[#a8a8a8] transition-all text-balance"
            href="https://temp.arkimanago.com"
            target="_blank">
            old one
          </a>
          .
        </p>
      </main>
      <div className="mt-[4rem]">
        <Footer />
      </div>
    </>
  );
}
