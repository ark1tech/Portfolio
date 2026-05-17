"use client";

export default function Error({ error, reset }) {
  return (
    <main className="w-full min-h-[50svh] flex flex-col gap-[1rem] py-5 items-center justify-center text-center">
      <h1 className="w-fit leading-tight">Something went wrong</h1>
      <p className="text-[#757575] max-w-md">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="navtext mt-2 px-4 py-2 border border-[#262626] rounded-md hover:border-[#ef542b] transition-colors">
        Try again
      </button>
    </main>
  );
}
