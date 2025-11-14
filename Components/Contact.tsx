"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(
      "SERVICE:",
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
      "TEMPLATE:",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
      "PUBLIC_KEY:",
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          alert("Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="p-10 pb-20 shadow-[0_4px_10px_rgba(128,128,128,0.4)]">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-(--tertiary)">Cont</span>
          <span className="text-(--secondary)">act</span>
        </h1>

        <div className="max-w-4xl mx-auto bg-[#1b1b1b] rounded-2xl shadow-lg border border-white/10 p-8">
          {/* CONTACT FORM */}
          <form onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white 
                         focus:border-(--secondary) outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white 
                         focus:border-(--secondary) outline-none transition"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/20 text-white 
                         focus:border-(--secondary) outline-none transition resize-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className=" cursor-pointer  font-bold w-full bg-(--tertiary) py-3 rounded-xl text-black text-lg  
                         hover:bg-(--secondary) transition shadow-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
