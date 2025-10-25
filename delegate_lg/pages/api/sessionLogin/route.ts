// app/api/sessionLogin/route.ts
import type { NextRequest } from "next/server";
import { cookies } from 'next/headers';
import getFirebaseAdmin from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  const { idToken } = await request.json();
  if (!idToken) return new Response('Missing idToken', { status: 400 });

  const admin = getFirebaseAdmin();
  // make cookie last 14 days (adjust)
  const expiresIn = 14 * 24 * 60 * 60 * 1000;

  try {
    const sessionCookie = await admin
      .auth()
      .createSessionCookie(idToken, { expiresIn });

    const cookieStore = cookies();
    cookieStore.set({
      name: 'session',
      value: sessionCookie,
      httpOnly: true,
      path: '/',
      maxAge: expiresIn / 1000,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production'
    });

    return new Response(JSON.stringify({ status: 'success' }), { status: 200 });
  } catch (err) {
    console.error('sessionLogin error', err);
    return new Response('Unauthorized', { status: 401 });
  }
}
