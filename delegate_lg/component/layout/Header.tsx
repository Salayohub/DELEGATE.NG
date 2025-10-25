"use client";
import Link from "next/link";

function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed w-full z-50">
      <Link href="/" className="text-2xl font-bold text-blue-600">TaskTrust</Link>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/packages">Packages</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</Link>
      </div>
    </nav>
  );
}

export default  Header;
