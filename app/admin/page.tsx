"use client";

import { useState, useEffect } from "react";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({ weight: ["700", "800", "900"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

const ADMIN_EMAIL = "uppumpslimited@gmail.com";
const ADMIN_PASSWORD = "test@123";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("isAdmin");
    if (stored === "true") {
      setIsLoggedIn(true);
      fetchMessages();
    }
  }, []);

  const handleLogin = () => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      setIsLoggedIn(true);
      fetchMessages();
    } else {
      alert("Invalid credentials");
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setMessages(data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this message?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`/api/contact?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((msg) => msg.id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <div
        className={`min-h-screen bg-[#ebebeb] flex items-center justify-center px-4 ${poppins.className}`}
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/assets/logo/U-2.png"
              alt="U P PUMPS Logo"
              className="w-16 h-16 mb-2"
            />
            <h1
              className={`text-2xl font-bold text-[#2a6e9e] ${raleway.className}`}
            >
              U P PUMPS PVT. LTD.
            </h1>
            <p className="text-sm text-[#2a6e9e]/80">Admin Portal Login</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2a6e9e]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a6e9e]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2a6e9e]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a6e9e]"
                placeholder="••••••••"
              />
            </div>
            <button
              onClick={handleLogin}
              className="w-full py-2 bg-[#2a6e9e] text-white font-semibold rounded-lg hover:bg-[#235b84] transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 ${poppins.className}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-3xl font-bold text-[#2a6e9e] ${raleway.className}`}
        >
          Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <h2 className="text-xl mb-4 text-[#2a6e9e] font-semibold">
        Contact Messages
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white shadow-lg rounded-lg p-6 relative border-t-4 border-[#2a6e9e]"
          >
            <button
              onClick={() => handleDelete(msg.id)}
              className="absolute top-2 right-2 bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 text-xs rounded-full shadow-sm transition"
            >
              Delete
            </button>

            <p className="text-lg font-bold text-gray-800 mb-1 capitalize">
              {msg.name}
            </p>
            <p className="text-sm text-blue-600 mb-1">{msg.email}</p>

            {msg.subject && (
              <div className="mb-3">
                <span className="inline-block text-xs font-medium text-white bg-purple-500 px-3 py-1 rounded-full shadow">
                  {msg.subject}
                </span>
              </div>
            )}

            <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md border border-gray-200 leading-relaxed">
              {msg.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
