"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; 
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="bg-gradient-to-bl from-blue-900 via-blue-400 to-blue-100 text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo and Medical Tourism Text */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={50} 
              height={50} 
              className="cursor-pointer" 
            />
          </Link>
          <div className="text-2xl font-bold font-serif">
            <span className="text-blue-900">Medical</span> <br />
            <span className="text-purple-700">Tourism</span>
          </div>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <RiCloseFill className="text-black text-3xl cursor-pointer"/>
          ) : (
            <HiOutlineMenuAlt3 className="text-black text-3xl cursor-pointer" />
          )}
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-6 text-xl font-semibold">
          <li><Link href="/" className="text-black relative group cursor-pointer">Home<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span></Link></li>
          <li><Link href="/" className="text-black relative group cursor-pointer">About<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span></Link></li>
          <li><Link href="/" className="text-black relative group cursor-pointer">Services<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span></Link></li>
          <li><Link href="/" className="text-black relative group cursor-pointer">Testimonials<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span></Link></li>
          <li><Link href="/" className="text-black relative group cursor-pointer">Contact<span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span></Link></li>
        </ul>
      </div>

      {/* Full-Screen Mobile Menu with Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay Background */}
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>

          {/* Full-Screen Menu */}
          <div className="fixed inset-0 z-50 bg-gradient-to-bl from-blue-900 via-blue-400 to-blue-100 rounded-lg m-4">
            <div className="absolute top-4 right-4 cursor-pointer">
              <RiCloseFill 
                className="text-black text-3xl"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            {/* Full-Screen Menu Content */}
            <div className="flex flex-col justify-center items-center h-full space-y-6 text-black text-2xl">
              <Link href="/" className="font-serif font-semibold">Home</Link>
              <Link href="/" className="font-serif font-semibold">About</Link>
              <Link href="/" className="font-serif font-semibold">Services</Link>
              <Link href="/" className="font-serif font-semibold">Testimonials</Link>
              <Link href="/" className="font-serif font-semibold">Contact</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
