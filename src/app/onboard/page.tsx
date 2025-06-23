"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OnboardPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    location: "",
    price: "",
    bio: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/onboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          category: "",
          location: "",
          price: "",
          bio: "",
        });
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
       
        <div className="space-y-6 px-4">
          <img
            src="/photo.jpg"
            alt="event"
            className="rounded-xl shadow-md w-full max-w-md mx-auto"
          />
          <div>
  <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-700">
    Join Our Talent Network & Shine On Stage!
  </h2>
  <p className="text-gray-700 mt-4">
    Are you a passionate performer? Whether you're a singer, dancer, speaker, or DJ – Artistly connects you with live events and opportunities across India.
  </p>
  <p className="text-gray-700 mt-2">
    Join our vibrant community of artists, share your unique talent, and get discovered by event organizers looking for talent like yours.
  </p>
</div>

        </div>

        <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200 w-full max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Join Us Today
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg text-gray-600"
            >
              <option value="">Select Category</option>
              <option value="Singers">🎤 Singer</option>
              <option value="Dancers">💃 Dancer</option>
              <option value="Speakers">🎙️ Speaker</option>
              <option value="DJs">🎧 DJ</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Your City"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              name="price"
              placeholder="Price Range (e.g., ₹5000 - ₹15000)"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              name="bio"
              placeholder="Tell us about your talent or performance"
              value={form.bio}
              onChange={handleChange}
              rows={4}
              required
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:text-purple-700 transition"
            >
              {loading ? "⏳ Submitting..." : "Become a Partner"}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-600 text-center font-semibold mt-2"
                >
                  ✅ Your profile has been submitted!
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
}
