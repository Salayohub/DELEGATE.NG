"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // You can later connect this to Firebase or an API route
      console.log("Form data:", form);
      await new Promise((res) => setTimeout(res, 1500)); // simulate sending
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Have a question, partnership inquiry, or need help delegating your next task? 
          We're just a message away.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We’d love to hear from you. Whether you’re looking to delegate a task, 
            become an agent, or simply ask a question — our team is here to help.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600 w-5 h-5" />
              <span>support@delegate.ng</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600 w-5 h-5" />
              <span>+234 916 041 6745</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600 w-5 h-5" />
              <span>19, Obideyi Ikale Street, Igando, Lagos, Nigeria</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Working Hours: Mon – Fri, 9:00 AM – 6:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Send a Message</h2>

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition font-medium"
            >
              <Send className="w-5 h-5" />
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className={`text-sm mt-2 ${
                  status.includes("success") ? "text-green-600" : "text-gray-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </section>

      {/* Google Map Section */}
      <section className="mt-12">
        <iframe
          title="Delegate NG Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.570674136913!2d3.2629!3d6.4476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ec5e5a2a5b3%3A0x9e3e9e40b1b2a6d3!2sIgando%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699631457439!5m2!1sen!2sng"
          width="100%"
          height="450"
          loading="lazy"
          className="border-0 w-full"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
