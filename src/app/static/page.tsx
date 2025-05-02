import { setTimeout } from "timers/promises";

export default async function StaticPage() {
  await setTimeout(2000);

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-center text-3xl font-bold">Static Page</h1>
        <p className="text-center">
          This page is statically cached at build time and opens instantly after
          npm start.
        </p>
      </div>
    </main>
  );
}
