import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    const { pathname } = request.nextUrl;
    console.log("Middleware is running for path:", pathname);
  }

  return NextResponse.next();
}