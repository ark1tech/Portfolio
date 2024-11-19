import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className=" flex flex-col items-start gap-[2rem]">
      <div className="flex flex-row gap-[1rem] items-center">
        {/* <Image
            className="border-[1px] border-[#262626] rounded-md w-[65px] h-auto"
            src="/static/images/rkbm_dp.png"
            width={80}
            height={80}
            alt="Picture of the author"
          /> */}
        <div className="flex flex-col">
          <div className="flex flex-row gap-[0.5rem] items-center">
            <h1 id="uncensored" className="w-fit leading-tight uncensored">
              Arki Mañago
            </h1>
          </div>
          <h5 className="w-full">Frontend Developer · Designer</h5>
        </div>
      </div>
      <div className="w-full gap-[1rem] flex flex-col test3">
        <p>
          Hello! I&rsquo;m Arki, and I make{" "}
          {/* #text:has(.anime-title:hover) .word:not(.anime-title) {opacity: 0.2;} */}
          <span id="uncensored" className="magic-text uncensored">
            designs with magic and logic
          </span>
          .
        </p>
        <p>
          Even as a computer science student, I&rsquo;ve immersed myself in
          marketing and brand building through various leadership positions in
          organizations at the University of the Philippines Diliman.
        </p>
        <p>
          My passion lies in fusing my marketing and programming skills to
          develop web apps that solve problems in the most enjoyable experience.
          It&rsquo;s my ultimate dream to make tech innovations that truly
          matter to communities.
        </p>
        <p>
          On the side, I run with friends and play with my cat. I listen to{" "}
          <a
            className="text-inherit hover:text-white transition-all cursor-help"
            href="https://open.spotify.com/album/4prgRUxaRi1OHVtCMrCbK2?si=yPVFGef3QBW2RlYfnvwgkA"
            target="_blank">
            The Ridleys
          </a>{" "}
          and other Filipino artists an unhealthy amount. And since you&rsquo;re
          already here, you should listen to{" "}
          <a
            className="hover:text-white text-inherit  transition-all cursor-help"
            href="https://open.spotify.com/track/7xSxOOtNh9bnFSqNgry7vB"
            target="_blank">
            Kalachuchi by Munimuni
          </a>
          , featuring my favorite flower!{" "}
          <Image
            className="w-[20px] h-[20px] inline mx-[0.1rem] rotate-45 chuchi"
            src="/static/images/kalachuchi.png"
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </p>
      </div>
      <div className="flex flex-row gap-[2rem]">
        <a
          className="inline_link font-[500]"
          href="https://www.linkedin.com/in/ark1tech/"
          target="_blank">
          <span className="">Connect with me</span>{" "}
          <FiArrowUpRight className="icon rotate-[45deg]" />
        </a>
        {/* <a className="inline_link" href="/" target="_self">
            Know more about me <FiArrowUpRight />
          </a> */}
      </div>
    </div>
  );
}
