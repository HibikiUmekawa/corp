'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { navLinks } from '@/lib/common/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white text-gray-700">
      <div className="flex h-16 items-center justify-between mx-12">
        {/* ---- Logo ---- */}
        <div className="flex items-center gap-2">
          <Link
            className="
              text-3xl font-bold font-kay
              bg-[linear-gradient(#00EFC1,#00C8CB)]
              bg-clip-text text-transparent
            "
            href="/"
          >
            TS Prime
          </Link>
        </div>

        {/* ---- Desktop Nav ---- */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              className="text-sm font-medium hover:text-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ---- Mobile Menu Button ---- */}
        <button
          aria-label="メニューを開く"
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ---- Mobile Sidebar (custom) ---- */}
      {isMenuOpen && (
        <>
          <div
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside
            aria-modal="true"
            className="fixed right-0 top-0 z-[51] h-screen w-[85vw] max-w-sm bg-white shadow-xl transition-transform duration-200 ease-out translate-x-0"
            role="dialog"
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
                  className="text-base font-medium hover:text-primary"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
