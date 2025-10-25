import { auth, googleProvider } from "@/lib/firebaseClient";
import { signInWithPopup } from "firebase/auth";

export const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User info:", result.user);
  } catch (error) {
    console.error("Google Sign-In failed:", error);
  }
};
