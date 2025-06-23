"use client";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black-900 via-[#0F1A5C] to-black-500 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Artistly Logo" width={50} height={50} />
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 tracking-tight">
            Artistly
          </span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link
            href="/"
            className="hover:text-purple-400 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/artists"
            className="hover:text-purple-400 transition duration-200"
          >
            Browse Artists
          </Link>
          <Link
            href="/onboard"
            className="hover:text-purple-400 transition duration-200"
          >
            Onboard
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-purple-400 transition duration-200"
          >
            Dashboard
          </Link>
        </div>

       
        <div className="md:hidden">
          <FiMenu className="text-2xl text-white" />
        </div>
      </div>
    </nav>
  );
}
