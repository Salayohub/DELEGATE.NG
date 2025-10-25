// lib/firebaseAdmin.ts
// ====================
// This file sets up Firebase Admin SDK for secure, server-side operations
// (e.g., verifying tokens, accessing Firestore securely, handling webhooks).

import { initializeApp } from "firebase/app";


let adminApp: admin.app.App;

// ✅ Initialize Firebase Admin SDK only once
if (!admin.apps.length) {
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!process.env.FIREBASE_ADMIN_CLIENT_EMAIL || !privateKey || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    throw new Error("Missing Firebase Admin environment variables.");
  }

  adminApp = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey,
    }),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
} else {
  adminApp = admin.app();
}

// ✅ Export useful admin instances
export const adminAuth = adminApp.auth();
export const adminDb = adminApp.firestore();
export const adminStorage = adminApp.storage();
export default adminApp;
