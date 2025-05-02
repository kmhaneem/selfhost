import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single",
    );
    const data = await response.json();

    return NextResponse.json({ joke: data.joke });
  } catch (error) {
    console.error("Failed to fetch joke:", error);
    return NextResponse.json(
      { error: "Failed to fetch joke" },
      { status: 500 },
    );
  }
}
