"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

export default function RouteHandlerPage() {
  const [joke, setJoke] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/random-joke");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch joke");
      }
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch joke");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <h1 className="text-center text-3xl font-bold">Route Handler Page</h1>
        <p className="text-center">
          This page is a client component that fetches data from a route handler
          (server endpoint).
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Random Programming Joke</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            {joke && <p>{joke}</p>}
            {!joke && !error && (
              <p className="text-muted-foreground">
                Click the button to fetch a joke.
              </p>
            )}
            <Button onClick={fetchJoke} disabled={loading}>
              {loading ? "Loading..." : "Get New Joke"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
