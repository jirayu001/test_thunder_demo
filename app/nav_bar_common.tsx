
"use client";
export default function NavBarCommon() {
  return (
    <nav className="flex justify-center gap-4 p-4 border-b">
      <button className="text-blue-500 hover:underline" onClick={() => window.location.href = '/dashboard'}>
        Home
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => window.location.href = '/profile'}>
        Profile
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => window.location.href = '/settings'}>
        Settings
      </button>
    </nav>
  );
}