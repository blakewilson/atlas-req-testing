import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("Middleware request", req);
  console.log("middleware request url", req.url);
  console.log("middleware next url", req.nextUrl);
  console.log("middleware headers", req.headers);

  NextResponse.next();
}
