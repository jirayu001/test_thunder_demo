"use client";
import Image from "next/image";
import { useAppRouter } from "../router";
import { useSearchParams } from "next/navigation";

export default function UserDetail() {
  const router = useAppRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") || "MeowUser";

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
        <h2 className="text-2xl font-extrabold mb-2 text-orange-500 text-center tracking-tight">ข้อมูลผู้ใช้</h2>
        <div className="w-full flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-600 w-28">อีเมล:</span>
            <span className="text-gray-800">{userId}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-600 w-28">ชื่อผู้ใช้:</span>
            <span className="text-gray-800">{userId}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-gray-600 w-28">สถานะ:</span>
            <span className="text-green-500 font-semibold">Active</span>
          </div>
        </div>
        <div className="flex gap-4 w-full mt-8">
          <button
            className="w-1/2 py-3 rounded-full text-orange-500 text-lg font-semibold border border-orange-400 hover:bg-orange-50 transition"
            onClick={() => router.goToEditUserDetail()}
          >
            Edit
          </button>
          <button
            className="w-1/2 py-3 rounded-full text-white text-lg font-semibold bg-gradient-to-r from-orange-400 to-orange-500 shadow-md hover:from-orange-500 hover:to-orange-400"
            onClick={() => router.goToHome()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
