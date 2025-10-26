"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('/asset/about_hero.svg')] text-black py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Delegate.NG</h1>
          <p className="text-lg md:text-xl opacity-90">
            Connecting you with trusted agents across Nigeria to handle your tasks—anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At <strong>Delegate.NG</strong>, our mission is to simplify life for Nigerians at home and abroad by providing 
            reliable, verified agents who can handle any task on your behalf—be it construction monitoring, 
            property inspection, market surveys, or local errands.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We aim to eliminate distance barriers, promote transparency, and foster trust through real-time 
            updates, secure payments, and professional accountability.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/asset/mission.svg"
            alt="Our mission illustration"
            width={450}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 border rounded-lg shadow-sm bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">1. Delegate a Task</h3>
            <p className="text-gray-600">
              Simply describe your task, choose a service area (Lagos, Ibadan, Osun, or Abuja), and 
              select a subscription type — pay-as-you-go or monthly.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">2. Get Matched</h3>
            <p className="text-gray-600">
              Our platform connects you with verified, trusted agents who specialize in your specific need.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm bg-gray-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">3. Monitor Progress</h3>
            <p className="text-gray-600">
              Receive live photo, video, and written updates in your dashboard until the task is complete.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8 text-blue-700">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Trust</h3>
            <p className="text-gray-600">We verify every agent to ensure tasks are handled with transparency and integrity.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Accountability</h3>
            <p className="text-gray-600">Agents are rated after each task, promoting consistent performance and reliability.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Security</h3>
            <p className="text-gray-600">All transactions are protected through escrow systems and secure payment gateways.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Innovation</h3>
            <p className="text-gray-600">We’re leveraging technology to bridge distance and bring people closer to their goals.</p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Service Areas</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We currently operate in four major Nigerian cities with plans to expand nationwide.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {["Lagos", "Ibadan", "Osun", "Abuja"].map((city) => (
            <span
              key={city}
              className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-medium"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Delegate Your Task?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Let our verified agents handle your projects while you stay stress-free.
        </p>
        <a
          href="/signup"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
