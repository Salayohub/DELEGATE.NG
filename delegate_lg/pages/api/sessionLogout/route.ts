// app/api/sessionLogout/route.ts
import { cookies } from 'next/headers';
import getFirebaseAdmin from '@/lib/firebaseAdmin';

export async function POST() {
  const cookieStore = cookies();
  const session = cookieStore.get('session')?.value;
  cookieStore.set({
    name: 'session',
    value: '',
    httpOnly: true,
    path: '/',
    maxAge: 0
  });

  if (session) {
    try {
      const admin = getFirebaseAdmin();
      const decoded = await admin.auth().verifySessionCookie(session, true);
      await admin.auth().revokeRefreshTokens(decoded.sub);
    } catch (err) {
      console.error('logout revoke error', err);
    }
  }

  return new Response(JSON.stringify({ status: 'logged_out' }), { status: 200 });
}
