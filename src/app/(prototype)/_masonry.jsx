// import Broughtby from './broughtby';
// import CSWeek from './cswek';
// import Nova from './nova';
// import Tackle from './tackle';

// const child = <Skeleton height={250} radius="md" animate={true} />;
import Image from "next/image";

export default function Masonry() {
  return (
    <div className="flex flex-col p-[1rem] gap-[1rem]">
      <p className="text-xs text-[#505050] w-full text-left text-pretty">
        You are looking at hackathon prototypes that were made within 4-8 hours. I haven&rsquo;t touched them since to preserve their competition look.
      </p>
      <a
        className="w-full opacity-30 hover:opacity-100 transition-all duration-500"
        href="https://broughtby.us"
        target="_blank">
        <Image
          className="border-[1px] border-[#262626] rounded-md w-full h-auto"
          src="/static/images/5.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
      </a>
      <a
        className="w-full opacity-30 hover:opacity-100 transition-all duration-500"
        href="https://www.facebook.com/CURSOR.Tackle"
        target="_blank">
        <Image
          className="border-[1px] border-[#262626] rounded-md w-full h-auto"
          src="/static/images/6.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
      </a>
    </div>
  );
}
