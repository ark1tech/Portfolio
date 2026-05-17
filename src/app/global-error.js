"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="font-roboto bg-black text-white min-h-[100svh] flex items-center justify-center p-6">
        <main className="flex flex-col gap-[1rem] text-center max-w-md">
          <h1 className="text-xl font-medium">Something went wrong</h1>
          <p className="text-[#757575] text-sm">{error.message}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-2 px-4 py-2 border border-[#262626] rounded-md hover:border-[#ef542b] transition-colors text-sm">
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
