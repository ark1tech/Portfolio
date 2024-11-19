import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="py-[2.5rem] flex flex-row justify-between items-center ">
      <Link href="/">
        <Image
          className="hover:drop-shadow-[0_0_6px_#ef542bAF] hover:rotate-90  transition-all"
          src="/static/images/rkbm.svg"
          width={30}
          height={10}
          alt="Picture of the author"
        />
      </Link>
      <div className="flex flex-row justify-between items-center gap-[1.75rem]">
        <a
          href="./CV.pdf"
          target="_blank"
          type="application/pdf"
          className="navtext">
          CV
        </a>
        <Link href="/blog" className="navtext">
          Blog
        </Link>
      </div>
    </nav>
  );
}
