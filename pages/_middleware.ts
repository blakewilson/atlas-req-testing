import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const reqUrl = req.url;

  return NextResponse.json(
    { message: `Middleware req.url = ${reqUrl}` },
    { status: 200 }
  );
}
