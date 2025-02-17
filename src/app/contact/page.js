"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie
import { FloatingNav } from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

const notify = () => toast.success("Message Sent!");

const ContactPage = () => {
  const [isCooldown, setIsCooldown] = useState(false);

  useEffect(() => {
    // Check if cooldown exists in cookies
    const cooldownEnd = Cookies.get("cooldownEnd");
    if (cooldownEnd && Date.now() < parseInt(cooldownEnd, 10)) {
      setIsCooldown(true);
      const remainingTime = parseInt(cooldownEnd, 10) - Date.now();
      setTimeout(() => setIsCooldown(false), remainingTime);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isCooldown) return;

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "no-cors",
      });

      notify();
      e.target.reset();

      // Set cooldown for 10 minutes (600,000 ms)
      const cooldownTime = Date.now() + 10 * 60 * 1000;
      Cookies.set("cooldownEnd", cooldownTime, { expires: 1 / 144, path: "/" }); // Expire in 10 minutes
      setIsCooldown(true);

      // Remove cooldown after 10 minutes
      setTimeout(() => setIsCooldown(false), 10 * 60 * 1000);
    } catch (error) {
      toast.error("Error sending message!");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white">
      <div className="fixed top-4 right-4 z-50">
        <Link
          target="_blank"
          href="https://github.com/Tanay04032006"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span className="hidden lg:inline">Github</span> <IconBrandGithub className="ml-2" />
          </span>
        </Link>
      </div>

      <div className="mt-10 w-full px-4">
        <FloatingNav />
      </div>

      <div className="text-center max-w-2xl py-8 px-4 mt-10 lg:mt-10">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">
          <span className="text-white">CONTACT</span>{" "}
          <span className="text-gray-700 dark:text-gray-500">ME</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-400 mt-4">
          Reach out for collaboration, project inquiries, or just to say hi!
        </p>
      </div>

      <div className="bg-gray-900 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-700 max-w-lg w-full mx-4">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 md:px-5 md:py-3 rounded-xl bg-gray-800 border border-gray-700 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none 
                         transition duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 md:px-5 md:py-3 rounded-xl bg-gray-800 border border-gray-700 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none 
                         transition duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 md:px-5 md:py-3 rounded-xl bg-gray-800 border border-gray-700 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none 
                         transition duration-200 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full font-semibold py-2 md:py-3 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg ${
              isCooldown
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
            }`}
            disabled={isCooldown}
          >
            {isCooldown ? "Please wait 10 minutes" : "Send Message"}
          </button>
        </form>
        <Toaster />
      </div>
      <div className="mt-10 w-full px-4">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
