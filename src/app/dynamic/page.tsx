import { setTimeout } from "timers/promises";

export const dynamic = "force-dynamic";

export default async function DynamicPage() {
  await setTimeout(2000);

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-center text-3xl font-bold">Dynamic Page</h1>
        <p className="text-center">
          This page is not cached and loads on every request.
        </p>
      </div>
    </main>
  );
}
