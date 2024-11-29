import { NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareauth";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;
  const user = await middlewareAuth(req);

  if(pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
    if (user) return NextResponse.redirect(new URL("/", url));
  }

  if (pathname.startsWith("/profile")) {
    if (!user) return NextResponse.redirect(new URL("/signin", url));
  }
}

export const config = {
  matcher: ["/profile/:path*", "/signin" , "/signup"],
};