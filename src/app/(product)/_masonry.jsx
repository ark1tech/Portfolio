import { Tooltip, MantineProvider } from "@mantine/core";
import Image from "next/image";
import { RiSvelteFill } from "react-icons/ri";
import { SiSupabase, SiNextdotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function ProductMasonry() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div className="flex flex-col md:px-[1rem] px-0 py-[1rem] gap-[1rem]">
        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/wip.png"
            width={694}
            height={214}
            alt="Komyut.ph"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-wrap justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] w-full text-left text-pretty">
                  February 2026
                </p>
                <h4>Komyut - Commuting App</h4>
                <div className="flex flex-row items-center gap-[0.5rem] text-[#575757]">
                  <RiSvelteFill className="" />
                  <SiSupabase className="mr-[0.1rem]" size={15} />
                  <Tooltip
                    color="dark"
                    label="View on GitHub"
                    offset={10}
                    position="top"
                    withArrow="true"
                    transitionProps={{ transition: "pop", duration: 300 }}>
                    <a
                      className="inline_link transition-all"
                      href="https://github.com/ark1tech/komyut-ph"
                      target="_blank">
                      <FaGithub />
                    </a>
                  </Tooltip>
                </div>
              </div>
              <p>
                A community-driven transit platform combining real-time
                crowdsourced routes, fares, and city updates to streamline
                everyday urban mobility.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <p className="text-[#575757] text-sm cursor-default">
                Work in progress
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/wip.png"
            width={694}
            height={214}
            alt="AI Reading Assistant"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-wrap justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] w-full text-left text-pretty">
                  February 2026
                </p>
                <h4>AI Reading Assistant</h4>
                <div className="flex flex-row items-center gap-[0.5rem] text-[#575757]">
                  <SiNextdotjs className="" />
                  <span
                    className="opacity-40 cursor-not-allowed"
                    title="Repository not yet available">
                    <FaGithub />
                  </span>
                </div>
              </div>
              <p>
                An intelligent reading companion that automatically captures,
                contextualizes, and summarizes your PDF highlights without
                manual annotations.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <p className="text-[#575757] text-sm cursor-default">
                Work in progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
