'use client';

import Link from 'next/link';
import { Heart, Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-slate-900' : 'bg-slate-800'} text-white py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">RSU Aulia</h3>
                <p className="text-xs text-teal-400">Blitar - Jawa Timur</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              Melayani dengan hati lebih dari 40 tahun. Terakreditasi Paripurna untuk pelayanan kesehatan terbaik.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/layanan">IGD 24 Jam</Link></li>
              <li><Link href="/layanan">Rawat Jalan</Link></li>
              <li><Link href="/layanan">Rawat Inap</Link></li>
              <li><Link href="/mcu">Medical Check-Up</Link></li>
              <li><Link href="/layanan">Hemodialisa</Link></li>
              <li><Link href="/layanan">Persalinan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/">Tentang Kami</Link></li>
              <li><Link href="/dokter">Jadwal Dokter</Link></li>
              <li><Link href="/kontak">Kontak</Link></li>
              <li><Link href="/fasilitas">Fasilitas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontak Darurat</h4>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              <a href={`https://wa.me/62${contactInfo.whatsapp.igd}`} className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{contactInfo.whatsapp.igd} (IGD)</span>
              </a>
              <a href={`mailto:${contactInfo.email[0]}`} className="flex items-center space-x-2 text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{contactInfo.email[0]}</span>
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Media Sosial</h4>
              <div className="flex items-center space-x-4">
                <a href={contactInfo.social.instagram} className="bg-gradient-to-br from-pink-500 to-rose-500 w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href={contactInfo.social.facebook} className="bg-gradient-to-br from-blue-600 to-blue-700 w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href={contactInfo.social.website} className="bg-gradient-to-br from-teal-500 to-cyan-600 w-10 h-10 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 RSU Aulia Blitar. All rights reserved. | Made with ❤️ for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
