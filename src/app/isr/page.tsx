import { setTimeout } from "timers/promises";

export const revalidate = 30;

export default async function ISRPage() {
  await setTimeout(2000);

  const lastRendered = new Date();

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-center text-3xl font-bold">ISR Page</h1>
        <p className="text-center">
          This page uses incremental static regeneration to rerender after 30
          seconds. Between rerenders, the page is cached statically.
        </p>
        <p className="text-center">
          Last rendered: {lastRendered.toLocaleString()}
        </p>
      </div>
    </main>
  );
}
