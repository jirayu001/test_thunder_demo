"use client";
import Image from "next/image";
import { useState } from "react";
import { useAppRouter } from "../../router";

export default function EditUserDetail() {
  const [email, setEmail] = useState("user@email.com");
  const [username, setUsername] = useState("MeowUser");
  const [status, setStatus] = useState("Active");
  const router = useAppRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle saving the updated user details
    router.goBack(); // Go back to user detail page after saving
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f6e7c1] px-2 py-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-8 sm:p-12 flex flex-col items-center">
        <Image
          src="/login_icon.svg"
          alt="User Icon"
          width={120}
          height={120}
          className="mb-6"
        />
        <h2 className="text-2xl font-extrabold mb-6 text-orange-500 text-center tracking-tight">
          แก้ไขข้อมูลผู้ใช้
        </h2>
        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">อีเมล</label>
            <input
              className="w-full border-b border-gray-300 focus:border-orange-400 focus:ring-0 bg-transparent placeholder-gray-400 text-lg outline-none py-2"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">ชื่อผู้ใช้</label>
            <input
              className="w-full border-b border-gray-300 focus:border-orange-400 focus:ring-0 bg-transparent placeholder-gray-400 text-lg outline-none py-2"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold mb-1">สถานะ</label>
            <select
              className="w-full border-b border-gray-300 focus:border-orange-400 focus:ring-0 bg-transparent text-lg outline-none py-2"
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className="w-1/2 py-3 rounded-full text-orange-500 text-lg font-semibold border border-orange-400 hover:bg-orange-50 transition"
              onClick={() => router.goBack()}
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-orange-400 to-orange-500 shadow-md hover:from-orange-500 hover:to-orange-400"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}