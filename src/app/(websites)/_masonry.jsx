import { Tooltip, MantineProvider } from "@mantine/core";
import MasonryImage from "@/components/MasonryImage";
import { FiArrowUpRight } from "react-icons/fi";
import { RiSvelteFill } from "react-icons/ri";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { FaGithub, FaVuejs, FaReact } from "react-icons/fa";

export default function Masonry() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div className="flex flex-col md:px-[1rem] px-0 py-[1rem]  gap-[1rem]">
        {/* <p className="text-xs text-[#313131] font-['JetBrains_Mono'] w-full text-justify text-pretty">
          &#47;&#47; I did not include this website in this list. But in case
          you&rsquo;re wondering, it&rsquo;s built with React and Next.js. You
          may visit the repository{" "}
          <a
            className="text-xs text-[#3a3a3a] font-['JetBrains_Mono'] underline-offset-2 underline hover:text-[#a8a8a8] transition-all text-balance"
            href="https://github.com/ark1tech/Portfolio"
            target="_blank">
            here
          </a>
          .
        </p> */}

<div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <MasonryImage
            src="/static/images/pilipinuts.png"
            alt="PilipiNuts: Philippine SDG Data Science Portfolio"
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-row justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] text-left text-pretty">
                  August 2024
                </p>
                <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                  <RiSvelteFill className="" />
                  <SiTailwindcss className="" />
                  <Tooltip
                    color="dark"
                    label="View on GitHub"
                    offset={10}
                    position="top"
                    withArrow="true"
                    transitionProps={{ transition: "pop", duration: 300 }}>
                    <a
                      className="inline_link transition-all"
                      href="https://github.com/ark1tech/CS132-master-portfolio"
                      target="_blank">
                      <FaGithub />
                    </a>
                  </Tooltip>
                </div>
              </div>
              <h4>PilipiNuts: Philippine SDG Data Science Portfolio</h4>
              <p>
                A data science portfolio website showcasing analytical projects that explore and address the United Nations Sustainable Development Goals within the Philippine context.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://pilipinuts.netlify.app/"
                target="_blank">
                <span>View live</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <MasonryImage
            src="/static/images/2.png"
            alt="Philippine Labor Crisis: A Data Science Investigation"
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-row justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] text-left text-pretty">
                  April 2024
                </p>
                <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                  <RiSvelteFill className="" />
                  <SiTailwindcss className="" />
                  <Tooltip
                    color="dark"
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
              <h4>Philippine Labor Crisis: A Data Science Investigation</h4>
              <p>
                An interactive data science portfolio documenting the end-to-end research process behind uncovering trends in Philippine labor displacement and workforce struggles.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://pocari-cs132.arkimanago.com"
                target="_blank">
                <span>View live</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <MasonryImage
            src="/static/images/1.png"
            alt="Broughtby - A Corporate Sponsorship Platform for Student Events"
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-row justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] text-left text-pretty">
                  April 2024
                </p>
                <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                  <RiSvelteFill className="" />
                  <SiTailwindcss className="" />
                  <Tooltip
                    color="dark"
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
              <h4>Broughtby - A Corporate Sponsorship Platform for Student Events</h4>
              <p>
                A sleek landing page for Broughtby, a startup streamlining corporate partnerships and sponsorship transactions for youth-led and student-organized events.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://broughtby.netlify.app/"
                target="_blank">
                <span>View live</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <MasonryImage
            src="/static/images/7.png"
            alt="King & Kim: Wedding Information Website"
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-row justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] text-left text-pretty">
                  March 2024
                </p>
                <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                  <SiNextdotjs className="" />
                  <SiTailwindcss className="" />
                  <Tooltip
                    color="dark"
                    label="View on GitHub"
                    offset={10}
                    position="top"
                    withArrow="true"
                    transitionProps={{ transition: "pop", duration: 300 }}>
                    <a
                      className="inline_link transition-all"
                      href="https://github.com/ark1tech/kknottyaffair"
                      target="_blank">
                      <FaGithub />
                    </a>
                  </Tooltip>
                </div>
              </div>
              <h4>King & Kim: Wedding Information Website</h4>
              <p>
                A wedding information website for King & Kim featuring event details, RSVP, invitation, and a countdown to their celebration.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://kknottyaffair.vercel.app/"
                target="_blank">
                <span>View live</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <MasonryImage
            src="/static/images/4.png"
            alt="Ge & Krish: Wedding Information Website"
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-row justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] text-left text-pretty">
                  Feb 2024
                </p>
                <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                  <FaVuejs className="" />
                  <SiTailwindcss className="" />
                  <Tooltip
                    color="dark"
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
              <h4>Ge & Krish: Wedding Information Website</h4>
              <p>
                A personalized wedding website that delivered event details, couple stories, and guest guidance to over 100 attendees for a seamless celebration experience.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://geandkrish.netlify.app"
                target="_blank">
                <span>View live</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <MasonryImage
            src="/static/images/3.png"
            alt="Personal Developer Portfolio (v1)"
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <div className="flex flex-row justify-between items-center gap-[0.5rem]">
                <p className="text-xs text-[#505050] text-left text-pretty">
                  March 2023
                </p>
                <div className="flex flex-row gap-[0.5rem] text-[#575757]">
                  <FaReact className="" />
                  <SiTailwindcss className="" />
                  <Tooltip
                    color="dark"
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
              <h4>Personal Developer Portfolio (v1)</h4>
              <p>
                A React-based resume and portfolio website showcasing my early frontend development projects, design sensibilities, and technical skill set.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://temp.arkimanago.com"
                target="_blank">
                <span>View live</span>{" "}
                <FiArrowUpRight className="icon rotate-[45deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
