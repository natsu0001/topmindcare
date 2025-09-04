"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 shadow bg-white relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Topmind Care Logo" width={32} height={32} />
        <h1 className="text-2xl font-bold text-violet-900">Topmind Care</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-bold text-purple-700 items-center">
        <li><a href="#why" className="hover:text-blue-600">Why</a></li>
        <li><a href="#programs" className="hover:text-blue-600">Programs</a></li>
        <li><a href="#features" className="hover:text-blue-600">Features</a></li>
        <li><a href="#parents" className="hover:text-blue-600">For Parents</a></li>
        <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
        <li><Button className="font-semibold">Start Free</Button></li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-purple-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 100, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 bg-white shadow-md w-48 rounded-lg p-4 flex flex-col gap-4 md:hidden z-50"
          >
            <a href="#why" className="text-gray-700 font-semibold hover:text-violet-600">Why</a>
            <a href="#programs" className="text-gray-700 font-semibold hover:text-violet-600">Programs</a>
            <a href="#features" className="text-gray-700 font-semibold hover:text-violet-600">Features</a>
            <a href="#parents" className="text-gray-700 font-semibold hover:text-violet-600">For Parents</a>
            <a href="#faq" className="text-gray-700 font-semibold hover:text-violet-600">FAQ</a>
            <Button className="font-semibold w-full">Start Free</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
