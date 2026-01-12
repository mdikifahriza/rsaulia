// src/components/layout/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { darkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { href: '/', label: 'Beranda' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/dokter', label: 'Dokter' },
    { href: '/fasilitas', label: 'Fasilitas' },
    { href: '/mcu', label: 'MCU' },
    { href: '/kontak', label: 'Kontak' },
  ];

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-lg transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>RSU Aulia</h1>
              <p className="text-xs text-teal-600">Blitar - Jawa Timur</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item.href ? 'text-teal-600' : darkMode ? 'text-slate-300' : 'text-slate-600'
                } hover:text-teal-600 transition-colors font-medium`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              href="/pendaftaran"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Daftar Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden pb-4 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-4 py-2 hover:bg-teal-50 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/pendaftaran"
                className="mx-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-lg font-semibold text-center"
              >
                Daftar Online
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}