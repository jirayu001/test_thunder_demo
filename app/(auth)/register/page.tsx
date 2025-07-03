"use client";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const RegisterPage = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-purple-700 relative">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/30 rounded-xl px-8 py-10 w-full max-w-sm text-white shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

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

          <div className="mb-4 relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full py-2 px-10 bg-white/10 border border-white/30 rounded-full placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white"
            />
            <FaLock className="absolute top-3 left-4 text-white" />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-purple-800 font-semibold rounded-full hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              const username = (document.querySelector('input[placeholder="Username"]') as HTMLInputElement)?.value || "";
              const password = (document.querySelector('input[placeholder="Password"]') as HTMLInputElement)?.value || "";
              const confirm = (document.querySelector('input[placeholder="Confirm Password"]') as HTMLInputElement)?.value || "";
              if (!username || !password || !confirm) {
                setMessage("กรุณากรอกข้อมูลให้ครบถ้วน");
                return;
              }
              if (password !== confirm) {
                setMessage("รหัสผ่านไม่ตรงกัน");
                return;
              }
              setMessage("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
            }}
          >
            Register
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-yellow-200">{message}</p>
        )}
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;