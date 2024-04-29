import { Tooltip, MantineProvider } from "@mantine/core";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { RiSvelteFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub, FaVuejs, FaReact } from "react-icons/fa";

export default function Masonry() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div className="flex flex-col p-[1rem] gap-[1rem]">
        <p className="text-xs text-[#505050] w-full text-left text-pretty">
          I did not include this website in this list. But if you&rsquo;re
          wondering, it&rsquo;s built with React and Next.js.
        </p>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/2.png"
            width={694}
            height={214}
            alt="Picture of the author"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-wrap justify-between items-center gap-[0.5rem]">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                April 2024
              </p>
              <h4>CS 132 Data Science Portfolio</h4>
              <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                <RiSvelteFill className="" />
                <SiTailwindcss className="" />
                <Tooltip
                  className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                  label="View on GitHub"
                  offset={10}
                  position="top"
                  withArrow="true"
                  transitionProps={{ transition: "pop", duration: 300 }}>
                  <a
                    className="inline_link transition-all"
                    href="https://github.com/ark1tech/CS-132"
                    target="_blank">
                    <FaGithub />
                  </a>
                </Tooltip>
              </div>
            </div>
            <p>
              A portfolio website that tells how a data science project about
              Philippine labor struggles has been conducted.
            </p>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <Tooltip
                className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                label="Work in progress"
                offset={10}
                position="left"
                transitionProps={{ transition: "pop", duration: 300 }}>
                <a
                  className="flex flex-row items-center gap-[0.5rem] cursor-not-allowed text-[#565252]"
                  href="https://www.linkedin.com/in/ark1tech/"
                  target="_blank">
                  <span>Case study</span>{" "}
                  <FiArrowUpRight className="icon rotate-[45deg]" />
                </a>
              </Tooltip>
              <a
                className="inline_link"
                href="https://pocari-cs132.arkimanago.com"
                target="_blank">
                <span>Execution</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/1.png"
            width={694}
            height={214}
            alt="Picture of the author"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-wrap justify-between items-center gap-[0.5rem]">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                April 2024
              </p>
              <h4>Broughtby</h4>
              <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                <RiSvelteFill className="" />
                <SiTailwindcss className="" />
                <Tooltip
                  className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                  label="View on GitHub"
                  offset={10}
                  position="top"
                  withArrow="true"
                  transitionProps={{ transition: "pop", duration: 300 }}>
                  <a
                    className="inline_link transition-all"
                    href="https://github.com/ark1tech/Broughtby"
                    target="_blank">
                    <FaGithub />
                  </a>
                </Tooltip>
              </div>
            </div>
            <p>
              A landing webpage for Broughtby, a startup that aims to ease
              corporate transactions of youth-led and student-led events.
            </p>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <Tooltip
                className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                label="Work in progress"
                offset={10}
                position="left"
                transitionProps={{ transition: "pop", duration: 300 }}>
                <a
                  className="flex flex-row items-center gap-[0.5rem] cursor-not-allowed text-[#565252]"
                  href="https://www.linkedin.com/in/ark1tech/"
                  target="_blank">
                  <span>Case study</span>{" "}
                  <FiArrowUpRight className="icon rotate-[45deg]" />
                </a>
              </Tooltip>
              <a
                className="inline_link"
                href="https://broughtby.us/"
                target="_blank">
                <span>Execution</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/4.png"
            width={694}
            height={214}
            alt="Picture of the author"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-wrap justify-between items-center gap-[0.5rem]">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                Feb 2024
              </p>
              <h4>My Older Sister&rsquo;s Wedding</h4>
              <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                <FaVuejs className="" />
                <SiTailwindcss className="" />
                <Tooltip
                  className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                  label="View on GitHub"
                  offset={10}
                  position="top"
                  withArrow="true"
                  transitionProps={{ transition: "pop", duration: 300 }}>
                  <a
                    className="inline_link transition-all"
                    href="https://github.com/ark1tech/KGWedding/"
                    target="_blank">
                    <FaGithub />
                  </a>
                </Tooltip>
              </div>
            </div>
            <p>
              An information website that guided over 100 guests about the
              engaged couple.
            </p>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <Tooltip
                className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                label="Work in progress"
                offset={10}
                position="left"
                transitionProps={{ transition: "pop", duration: 300 }}>
                <a
                  className="flex flex-row items-center gap-[0.5rem] cursor-not-allowed text-[#565252]"
                  href="https://www.linkedin.com/in/ark1tech/"
                  target="_blank">
                  <span>Case study</span>{" "}
                  <FiArrowUpRight className="icon rotate-[45deg]" />
                </a>
              </Tooltip>
              <a
                className="inline_link"
                href="https://geandkrish.com"
                target="_blank">
                <span>Execution</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/3.png"
            width={694}
            height={214}
            alt="Picture of the author"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-wrap justify-between items-center gap-[0.5rem]">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                March 2023
              </p>
              <h4>(Old) Personal Website</h4>
              <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                <FaReact className="" />
                <SiTailwindcss className="" />
                <Tooltip
                  className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                  label="View on GitHub"
                  offset={10}
                  position="top"
                  withArrow="true"
                  transitionProps={{ transition: "pop", duration: 300 }}>
                  <a
                    className="inline_link transition-all"
                    href="https://github.com/ark1tech/my-website"
                    target="_blank">
                    <FaGithub />
                  </a>
                </Tooltip>
              </div>
            </div>
            <p>
              My resume/portfolio website. Not maintained anymore as I am
              currently revamping and rebranding it, and I&rsquo;m very excited
              to launch it!
            </p>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <Tooltip
                className="text-[0.5rem] text-[#ffffff] bg-[#414040]"
                label="Work in progress"
                offset={10}
                position="left"
                transitionProps={{ transition: "pop", duration: 300 }}>
                <a
                  className="flex flex-row items-center gap-[0.5rem] cursor-not-allowed text-[#565252]"
                  href="https://www.linkedin.com/in/ark1tech/"
                  target="_blank">
                  <span>Case study</span>{" "}
                  <FiArrowUpRight className="icon rotate-[45deg]" />
                </a>
              </Tooltip>
              <a
                className="inline_link"
                href="https://arkimanago.com"
                target="_blank">
                <span>Execution</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
