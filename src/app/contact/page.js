"use client";

import React from "react";
import { FloatingNav } from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

const notify = () => toast.success("Message Sent!");

const ContactPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await fetch(
        process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      notify(); // Show success toast
      e.target.reset(); // Reset the form after submission
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
            Github <IconBrandGithub className="ml-2" />
          </span>
        </Link>
      </div>
      {/* Floating Navigation */}
      <div className="mt-10 w-full px-4">
        <FloatingNav />
      </div>

      {/* Page Title */}
      <div className="text-center max-w-2xl py-8 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold">
          <span className="text-white">CONTACT</span>{" "}
          <span className="text-gray-700 dark:text-gray-500">ME</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-400 mt-4">
          Reach out for collaboration, project inquiries, or just to say hi!
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-900 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-700 max-w-lg w-full mx-4">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name:
            </label>
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

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
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

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message:
            </label>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 
                       hover:to-blue-600 text-white font-semibold py-2 md:py-3 px-4 rounded-xl 
                       transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
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