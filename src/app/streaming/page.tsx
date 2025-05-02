import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { setTimeout } from "timers/promises";

export const dynamic = "force-dynamic";

export default function StreamingPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-center text-3xl font-bold">Streaming Example</h1>
        <p className="text-center">
          This page demonstrates streaming nested server components. Each
          component will load successively with a 2-second delay.
        </p>
        <Suspense fallback={<Skeleton className="h-[120px]" />}>
          <FirstComponent />
        </Suspense>
      </div>
    </main>
  );
}

async function FirstComponent() {
  await setTimeout(2000);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold">First Component</h2>
        <p>This component loaded first after 2 seconds</p>
        <div className="mt-4">
          <Suspense fallback={<Skeleton className="h-[120px]" />}>
            <SecondComponent />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}

async function SecondComponent() {
  await setTimeout(2000);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold">Second Component</h2>
        <p>This component loaded second after 4 seconds</p>
        <div className="mt-4">
          <Suspense fallback={<Skeleton className="h-[120px]" />}>
            <ThirdComponent />
          </Suspense>
        </div>
      </CardContent>
    </Card>
  );
}

async function ThirdComponent() {
  await setTimeout(2000);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-bold">Third Component</h2>
        <p>This component loaded third after 6 seconds</p>
      </CardContent>
    </Card>
  );
}
