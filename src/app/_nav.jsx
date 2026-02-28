"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isBlog = pathname === "/blog";
  return (
    <nav className="py-[2rem] flex flex-row justify-between items-center ">
      <Link href="/" className="p-1 group">
        <Image
          className="transition-all group-hover:rotate-90 group-hover:drop-shadow-[0_0_6px_#ef542bAF]"
          src="/static/images/rkbm.svg"
          width={30}
          height={10}
          alt="logo"
        />
      </Link>
      <div className="flex flex-row justify-between items-center gap-[1.75rem]">
        {/* <a
          href="./CV.pdf"
          target="_blank"
          type="application/pdf"
          className="navtext">
          CV
        </a> */}
        {isBlog ? (
          <p className="navtext navtext-active">Blog</p>
        ) : (
          <Link href="/blog">
            <p className="navtext">Blog</p>
          </Link>
        )}
      </div>
    </nav>
  );
}
