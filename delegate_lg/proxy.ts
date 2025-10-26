// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getFirebaseAdmin from "./lib/firebaseAdmin";

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only protect certain routes
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/task')) {
    const sessionCookie = req.cookies.get('session')?.value;
    if (!sessionCookie) {
      // redirect to login
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
    try {
      const admin = getFirebaseAdmin();
      await admin.auth().verifySessionCookie(sessionCookie, true);
      // valid -> continue
      return NextResponse.next();
    } catch (err) {
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/task/:path*']
};
