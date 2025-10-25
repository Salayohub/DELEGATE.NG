"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const [view, setView] = useState<string>("");

  // Optional: handle navigation based on selected footer link
  const handleNavigation = (path: string) => {
    setView(path);
    router.push(`/${path}`);
  };

  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* --- Brand Section --- */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-indigo-400">Delegate.NG</h3>
          <p className="text-sm text-gray-400">
            Your trusted partner for delegation and monitoring across Nigeria.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-indigo-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span
                className="text-gray-300 hover:text-indigo-300 cursor-pointer"
                onClick={() => handleNavigation("pricing")}
              >
                Pricing & Offers
              </span>
            </li>
            <li>
              <span
                className="text-gray-300 hover:text-indigo-300 cursor-pointer"
                onClick={() => handleNavigation("about")}
              >
                About Us
              </span>
            </li>
            <li>
              <span
                className="text-gray-300 hover:text-indigo-300 cursor-pointer"
                onClick={() => handleNavigation("contact")}
              >
                Contact Support
              </span>
            </li>
          </ul>
        </div>

        {/* --- Legal Section --- */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-indigo-400">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span
                className="text-gray-300 hover:text-indigo-300 cursor-pointer"
                onClick={() => handleNavigation("policy")}
              >
                Privacy Policy
              </span>
            </li>
            <li>
              <span
                className="text-gray-300 hover:text-indigo-300 cursor-pointer"
                onClick={() => handleNavigation("terms")}
              >
                Terms of Service
              </span>
            </li>
          </ul>
        </div>

        {/* --- Service Areas --- */}
        <div>
          <h3 className="text-lg font-bold mb-3 text-indigo-400">Service Areas</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Lagos, Nigeria</li>
            <li>Abuja, Nigeria</li>
            <li>Ibadan, Nigeria</li>
            <li>Osun, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Delegate.NG. All rights reserved.
      </div>
    </footer>
  );
}
