"use client";

import { CheckCircle2, Clock, Calendar, Shield } from "lucide-react";
import Link from "next/link";

export default function PackagesPage() {
  return (
    <section className="bg-blue-700 text-white py-20 text-center">
      <div className="max-w-7xl mx-auto text-center mb-16 bg-blue-600 py-8">
        <h1 className="text-4xl md:text-5xl text-white font-bold  mb-4">
          Choose Your Plan
        </h1>
        <p className="text-white max-w-2xl mx-auto">
          Whether you need one-time help or ongoing support, we’ve got flexible
          plans to fit your needs. Pay securely and delegate your tasks with
          confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Pay-As-You-Go Plan */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Pay-As-You-Go
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Perfect for one-time errands or small tasks.
          </p>
          <p className="text-3xl font-bold text-blue-600 mb-2">₦50,000</p>
          <p className="text-gray-400 mb-6">Per Task</p>

          <ul className="space-y-3 text-gray-600 flex-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              One-time task assignment
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Real-time progress updates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Escrow-protected payment
            </li>
          </ul>

          <Link
            href="/signup"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition text-center"
          >
            Get Started
          </Link>
        </div>

        {/* Monthly Plan */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col border-2 border-blue-600 scale-105">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Monthly Plan
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Ideal for regular users or small business owners.
          </p>
          <p className="text-3xl font-bold text-blue-600 mb-2">₦200,000</p>
          <p className="text-gray-400 mb-6">Per Month</p>

          <ul className="space-y-3 text-gray-600 flex-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Up to 10 delegated tasks monthly
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Priority agent assignment
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Dedicated dashboard & support
            </li>
          </ul>

          <Link
            href="/signup"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition text-center"
          >
            Subscribe Now
          </Link>
        </div>

        {/* Yearly Plan */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-7 h-7 text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Yearly Plan
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Best value for frequent users and corporate clients.
          </p>
          <p className="text-3xl font-bold text-blue-600 mb-2">₦1,000,000</p>
          <p className="text-gray-400 mb-6">Per Year</p>

          <ul className="space-y-3 text-gray-600 flex-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Unlimited task delegation
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              Premium customer support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" />
              2% escrow transaction discount
            </li>
          </ul>

          <Link
            href="/signup"
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition text-center"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}
