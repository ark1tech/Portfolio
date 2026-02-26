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
          <h5 className="w-full">Product Design & Engineering</h5>
        </div>
      </div>
      <div className="w-full gap-[1rem] flex flex-col test3">
        <p>
          I&rsquo;m Arki, and I looove building stuff where{" "}
          <span id="uncensored" className="magic-text uncensored">
            good engineering meets good taste
          </span>
          .
        </p>
        <p>
          I believe good design lives in the details that are easy to miss and (as it turns out)
          hard to unsee. I care deeply about how people interact with products - that
          it&rsquo;s accessible, practical, and most importantly feels good.
          <Image
            className="w-[20px] h-[20px] inline mx-[0.4rem] rotate-45 chuchi"
            src="/static/images/kalachuchi.png"
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </p>
        <p>
          On the side, I mostly spend time finishing my computer science degree at UP Diliman. I&rsquo;ve also been studying Japanese (N4) since my student exchange in Kyoto. Sometimes I play with my grumpy cat!{" "}
          <Image
            className="w-[20px] h-[20px] inline mx-[0.2rem]"
            src="/static/images/maki.png"
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </p>
        {/* <p>
          I love <span className="italic"> love </span> OPM. I listen to{" "}
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
        </p> */}
      </div>
      <a
        className="inline_link font-[500]"
        href="https://www.linkedin.com/in/ark1tech/"
        target="_blank">
          <span className="flex-1">
            Let&rsquo;s build something beautiful and{" "}
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              useful
              <FiArrowUpRight className="icon rotate-[45deg]" />
            </span>
          </span>
      </a>
    </div>
  );
}
