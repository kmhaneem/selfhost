import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-center text-3xl font-bold">
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </h1>
        <p className="text-muted-foreground text-center">
          This project demonstrates how to self-host a Next.js app on a VPS with
          a local PostgreSQL database. All Next.js features like image
          optimizations, server components, and caching are fully functional.
          Check out the tutorial on my{" "}
          <a
            href="https://www.youtube.com/c/codinginflow"
            className="text-[#4daa57] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>{" "}
          !
        </p>
        <Card className="mx-auto max-w-sm">
          <CardContent className="flex flex-col gap-4">
            <Button asChild>
              <Link href="/todo">Go to Todo List</Link>
            </Button>
            <Button asChild>
              <Link href="/dynamic">Go to Dynamic Page</Link>
            </Button>
            <Button asChild>
              <Link href="/static">Go to Static Page</Link>
            </Button>
            <Button asChild>
              <Link href="/isr">Go to ISR Page</Link>
            </Button>
            <Button asChild>
              <Link href="/streaming">Go to Streaming Page</Link>
            </Button>
            <Button asChild>
              <Link href="/route-handler">Go to Route Handler Page</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
