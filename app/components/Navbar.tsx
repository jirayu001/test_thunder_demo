"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      setIsLoggedIn(false);
    }
  };

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg relative">
      {/* Logo */}
      <span className="text-white font-bold text-2xl tracking-wide">MyApp Yuded</span>

      {/* Hamburger (mobile) */}
      <button
        className="md:hidden absolute right-10"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Open menu"
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu (desktop) */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="/" className="text-white hover:bg-white/20 px-4 py-2 rounded transition-colors">Home</Link>
        <Link href="/products" className="text-white hover:bg-white/20 px-4 py-2 rounded transition-colors">Products</Link>
        <Link href="/info" className="text-white hover:bg-white/20 px-4 py-2 rounded transition-colors">Info</Link>
      </div>

      {/* Auth (desktop) */}
      <div className="hidden md:flex gap-4">
        {isLoggedIn ? (
          <>
            <span className="flex items-center bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-blue-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path stroke="currentColor" strokeWidth="2" d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
              </svg>
              {typeof window !== "undefined" ? localStorage.getItem("username") : ""}
            </span>
            <button
              className="bg-red-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-red-700 transition-colors"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="bg-white text-blue-600 font-semibold px-4 py-2 rounded shadow hover:bg-blue-100 transition-colors">Login</Link>
            <Link href="/register" className="bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-800 transition-colors">Register</Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-0 w-2/3 bg-white shadow-lg rounded-bl-lg z-50 p-6 flex flex-col gap-4 animate-slide-in">
          <Link href="/" className="text-blue-600 font-semibold" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className="text-blue-600 font-semibold" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/info" className="text-blue-600 font-semibold" onClick={() => setMenuOpen(false)}>Info</Link>
          <div className="border-t pt-4 flex flex-col gap-2">
            {isLoggedIn ? (
              <>
                <span className="flex items-center bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path stroke="currentColor" strokeWidth="2" d="M4 20c0-4 4-6 8-6s8 2 8 6"/>
                  </svg>
                  {typeof window !== "undefined" ? localStorage.getItem("username") : ""}
                </span>
                <button
                  className="bg-red-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-red-700 transition-colors"
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-700 transition-colors" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link href="/register" className="bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow hover:bg-blue-800 transition-colors" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
