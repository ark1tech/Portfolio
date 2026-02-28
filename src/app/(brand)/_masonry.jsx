import { MantineProvider } from "@mantine/core";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Masonry() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <div className="flex flex-col md:px-[1rem] px-0 py-[1rem]  gap-[1rem]">
        <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
          <Image
            className="w-full h-auto"
            src="/static/images/akkord.png"
            width={694}
            height={214}
            alt="project demo"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                December 2025
              </p>
              <h4>Akkord</h4>
              <p>
                An operations platform equpping LGUs with practical digital tools that improve public service, engage citizens, and build smarter, more connected communities.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://www.linkedin.com/company/akkord-smart-cities/"
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
            src="/static/images/broughtbyb.png"
            width={694}
            height={214}
            alt="project demo"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                April 2024
              </p>
              <h4>Broughtby</h4>
              <p>
                A passthrough payment platform where event organizers and
                sponsors can conduct their transactions.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://broughtby.netlify.app/"
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
            src="/static/images/cswek.png"
            width={694}
            height={214}
            alt="project demo"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                April 2024
              </p>
              <h4>CS Week</h4>
              <p>
                CS Week is an annual student-bonding event in the Department of
                Computer Science at the University of the Philippines Diliman.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://www.facebook.com/up.cs.week"
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
            src="/static/images/tackle.png"
            width={694}
            height={214}
            alt="project demo"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                Oct 2023
              </p>
              <h4>Tackle 2024: Limitless</h4>
              <p>
                UP CURSOR&rsquo;s Tackle is an annual event that provides
                opportunities for aspiring tech professionals.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://www.facebook.com/CURSOR.Tackle"
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
            src="/static/images/nova.png"
            width={694}
            height={214}
            alt="project demo"
            quality={100}
          />
          <div className="card">
            <div className="flex flex-col gap-[0.5rem] w-full">
              <p className="text-xs text-[#505050] w-full text-left text-pretty">
                Oct 2023
              </p>
              <h4>UP NOVA</h4>
              <p>
                UP NOVA (UP Innovation Leaders&rsquo; Hub) is a student-led
                organization that stands at the forefront of inclusive
                innovation.
              </p>
            </div>
            <div className="w-full flex flex-row justify-end gap-[1rem]">
              <a
                className="inline_link"
                href="https://www.facebook.com/UPNOVAOfficial"
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
