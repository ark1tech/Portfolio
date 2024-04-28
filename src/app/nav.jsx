import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="py-[2rem] flex flex-row justify-between items-center ">
      <Image
        src="/static/images/rkbm.svg"
        width={30}
        height={10}
        alt="Picture of the author"
      />
      <div className="flex flex-row justify-between items-center gap-[1rem]">
        <a>Blog</a>
        <a>Resume</a>
      </div>
    </nav>
  );
}
