"use client";
import { Skeleton, MantineProvider } from "@mantine/core";

const child = <Skeleton height={20} radius="xs" animate={true} />;

export default function Blog() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <main className="w-full min-h-[90svh] flex flex-col gap-[2rem]">
        <div className="flex flex-row gap-[1rem] items-center">
          <div className="flex flex-col">
            <div className="flex flex-row gap-[0.5rem] items-center">
              <h1 className="w-fit leading-tight">Oops! Nothing&rsquo;s here (yet)</h1>
            </div>
            <h5 className="w-full">Shipping very soon</h5>
          </div>
        </div>
        <p>ここに何か貼ってあるってことにしよう。。笑</p>
      </main>
    </MantineProvider>
  );
}
