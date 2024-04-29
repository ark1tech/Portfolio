import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-start gap-[2rem]">
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
              <h1 className="w-fit leading-tight">Arki Mañago</h1>
            </div>
            <h5 className="w-full">Student Leader · Frontend Developer</h5>
          </div>
        </div>
        <div className="w-full gap-[1rem] flex flex-col">
          <p>
            Hello! I&rsquo;m Arki, and I make designs that{" "}
            <span className="magic-text">
              tell stories with magic and logic
            </span>
            .
          </p>
          <p>
            As a computer science student, I&rsquo;ve immersed myself in
            marketing and brand building through various leadership positions in
            organizations at the University of the Philippines Diliman.
          </p>
          <p>
            My passion lies in fusing my skills in marketing and programming to
            craft projects that are both on-brand and on-target.
          </p>
          <p>
            On the side, I love jogging with my friends and playing with my cat! 
            When I feel extra senti, I&rsquo;d walk around our campus listening to <a className="text-inherit hover:text-white transition-all cursor-help" href="https://open.spotify.com/album/4prgRUxaRi1OHVtCMrCbK2?si=yPVFGef3QBW2RlYfnvwgkA" target="_blank">my favorite The Ridleys songs</a> while admiring <span className="kalachuchi cursor-grabbing">kalachuchi flowers along the way</span>{" "}
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
            className="inline_link"
            href="https://www.linkedin.com/in/ark1tech/"
            target="_blank">
            <span>Connect with me</span>{" "}
            <FiArrowUpRight className="icon rotate-[45deg]" />
          </a>
          {/* <a className="inline_link" href="/" target="_self">
            Know more about me <FiArrowUpRight />
          </a> */}
        </div>
        <div className="w-full flex flex-col items-end mt-[1rem]">
          <p className="text-xs text-[#505050] w-full text-right text-balance">
            This site serves as my temporary portfolio website as I have yet to
            finish revamping the{" "}
            <a
              className="text-xs text-[#505050] underline-offset-2 underline hover:text-[#a8a8a8] transition-all text-balance"
              href="https://arkimanago.com"
              target="_blank">
              old one
            </a>
            .
          </p>
          <p className="text-xs text-[#505050] w-full text-right text-balance">
            Unfortunately, this website is also still not done due to time constraints as a student.
          </p>
        </div>
      </div>
    </>
  );
}
