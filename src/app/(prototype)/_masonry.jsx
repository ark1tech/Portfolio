import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Masonry() {
  return (
    <div className="flex flex-col p-[1rem] gap-[1rem]">
      <p className="text-xs text-[#505050] w-full text-left text-pretty">
        You are looking at hackathon prototypes that were made within 4-8 hours.
        I haven&rsquo;t touched them since to preserve their competition look.
      </p>
      <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
        <Image
          className="w-full h-auto"
          src="/static/images/5.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
        <div className="card">
          <p className="text-xs text-[#505050] w-full text-left text-pretty">
            Sept 2023
          </p>
          <h4>Checkmate</h4>
          <p>
            Checkmate is a dating mobile application that aims to minimize
            incestuous relationships in Game of Thrones.
          </p>
          <div className="w-full flex flex-row justify-end gap-[1rem]">
            <a
              className="inline_link"
              href="https://bit.ly/4cSh4BM"
              target="_blank">
              <span>Prototype</span>{" "}
              <FiArrowUpRight className="icon rotate-[45deg]" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col border-[1px] border-[#262626] rounded-md overflow-hidden full_card">
        <Image
          className="w-full h-auto"
          src="/static/images/6.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
        <div className="card">
          <p className="text-xs text-[#505050] w-full text-left text-pretty">
            March 2023
          </p>
          <h4>Nayon</h4>
          <p>
            Nayon is a volunteering mobile application that focuses on impact
            measurability and project transparency.
          </p>
          <div className="w-full flex flex-row justify-end gap-[1rem]">
            <a
              className="inline_link"
              href="https://www.facebook.com/CURSOR.Tackle"
              target="_blank">
              <span>Prototype</span>{" "}
              <FiArrowUpRight className="icon rotate-[45deg]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
