// import Broughtby from './broughtby';
// import CSWeek from './cswek';
// import Nova from './nova';
// import Tackle from './tackle';

// const child = <Skeleton height={250} radius="md" animate={true} />;
import Image from "next/image";

export default function Masonry() {
  return (
    <div className="flex flex-col p-[1rem] gap-[1rem]">
      <a
        className="w-full opacity-30 hover:opacity-100 transition-all duration-500"
        href="https://broughtby.us"
        target="_blank">
        <Image
          className="border-[1px] border-[#262626] rounded-md w-full h-auto"
          src="/static/images/4.png"
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
          src="/static/images/1.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
      </a>
      <a
        className="w-full opacity-30 hover:opacity-100 transition-all duration-500"
        href="https://www.facebook.com/UPNOVAOfficial"
        target="_blank">
        <Image
          className="border-[1px] border-[#262626] rounded-md w-full h-auto"
          src="/static/images/2.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
      </a>
      <a
        className="w-full opacity-30 hover:opacity-100 transition-all duration-500"
        href="https://www.facebook.com/up.cs.week"
        target="_blank">
        <Image
          className="border-[1px] border-[#262626] rounded-md w-full h-auto"
          src="/static/images/3.png"
          width={694}
          height={214}
          alt="Picture of the author"
          quality={100}
        />
      </a>
    </div>
  );
}
