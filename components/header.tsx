"use client";

import { navLinks } from "@/lib/common/data";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-gray-700">
      <div className="flex h-16 items-center justify-between mx-12">
        {/* ---- Logo ---- */}
        <div className="flex items-center gap-2">
          <span
            className="
              text-3xl font-bold font-kay
              bg-[linear-gradient(#00EFC1,#00C8CB)]
              bg-clip-text text-transparent
            "
          >
            TS Prime
          </span>
        </div>

        {/* ---- Desktop Nav ---- */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ---- Mobile Menu Button ---- */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="メニューを開く"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ---- Mobile Sidebar (custom) ---- */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <aside
            className="fixed right-0 top-0 z-[51] h-screen w-[85vw] max-w-sm bg-white shadow-xl transition-transform duration-200 ease-out translate-x-0"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between border-b px-6 py-3">
              <span className="font-bold text-lg">メニュー</span>
              <button
                aria-label="閉じる"
                className="p-2 rounded hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="border-t p-4">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                無料で始める
              </Link>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
