import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaFacebookSquare, FaHeart } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function Foot() {
  return (
    <footer className=" relative overflow-clip">
      <Image
        className="z-0 px-[2rem] w-[1200px] h-auto absolute left-0 right-0 bottom-0 mx-auto md:block hidden"
        src="/static/images/rkbm_bg.svg"
        width={1346}
        height={461}
        quality={100}
        alt="Picture of the author"
      />
      <Image
        className="px-[2rem] w-[550px] h-auto absolute left-0 right-0 bottom-0 mx-auto md:hidden block"
        src="/static/images/arki_bg.svg"
        width={1346}
        height={461}
        quality={100}
        alt="Picture of the author"
      />
      <div className="relative z-1 foot w-full flex flex-col mt-[3rem] mb-[19rem] gap-[2rem]">
        <div className="flex flex-row justify-between gap-[1rem]">
          <p className="text-xs text-[#505050] font-['JetBrains_Mono'] text-pretty">
            Made with <FaHeart className="inline" /> by Arki
          </p>
          <div className="flex flex-row gap-[2rem] items-center">
            <Link href="/">
              <Image
                className="hover:drop-shadow-[0_0_6px_#ef542bAF] hover:rotate-90  transition-all"
                src="/static/images/rkbm.svg"
                width={15}
                height={10}
                alt="Picture of the author"
              />
            </Link>
            <a href="https://www.linkedin.com/in/ark1tech/" target="_blank">
              <FaLinkedin className="hover:text-main text-[#505050] transition-all" />
            </a>
            <a href="https://www.instagram.com/arkimanago/" target="_blank">
              <AiFillInstagram className="hover:text-main text-[#505050] transition-all" />
            </a>
            <a href="https://www.facebook.com/ark1desu/" target="_blank">
              <FaFacebookSquare className="hover:text-main text-[#505050] transition-all" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
