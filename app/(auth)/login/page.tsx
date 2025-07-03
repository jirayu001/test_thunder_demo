"use client";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-700 relative">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl px-8 py-10 w-full max-w-sm text-white shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-2 px-10 bg-white/10 border border-white/30 rounded-full placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaUser className="absolute top-3 left-4 text-white" />
          </div>

          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-10 bg-white/10 border border-white/30 rounded-full placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaLock className="absolute top-3 left-4 text-white" />
          </div>

          <div className="flex justify-between items-center text-sm mb-6">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-white" />
              <span>Remember me</span>
            </label>
            <a href="#" className="underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-purple-800 font-semibold rounded-full hover:bg-gray-100"
            onClick={(e) => {
                e.preventDefault();
                const username = (document.querySelector('input[placeholder="Username"]') as HTMLInputElement)?.value || "";
                const password = (document.querySelector('input[placeholder="Password"]') as HTMLInputElement)?.value || "";
                if (username === "admin" && password === "1234") {
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", username);
                window.location.href = "/test_thunder_demo";
                } else {
                window.alert("Username หรือ Password ไม่ถูกต้อง");
                }
            }}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <a href="#" className="underline">Register</a>
        </p>
      </div>
    </div>
  );
}



