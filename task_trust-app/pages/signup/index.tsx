"use client";

import { useState } from "react";
import { useRouter } from "next/router";


export default function SignupPage() {
  const router = useRouter();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fake signup (static demo)
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simulate server delay
    setTimeout(() => {
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
      } else if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
      } else {
        alert("✅ Account created successfully!");
        router.push("/login"); // redirect to login page
      }
      setLoading(false);
    }, 1000);
  };

  // Fake Google signup
  const handleGoogleSignup = () => {
    alert("Google signup (demo only)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <div className="border-t w-1/4 border-gray-300"></div>
          <span className="mx-3 text-gray-500">OR</span>
          <div className="border-t w-1/4 border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100 transition"
          disabled={loading}
        >
         <img src="/asset/google.svg" alt="Google" width={20} height={20} />
          <span>Sign Up with Google</span>
        </button>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
