'use client';

import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Globe } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { contactInfo } from '@/lib/data';

export default function ContactSection() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} py-20`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Kami</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
            Kami siap melayani Anda 24 jam setiap hari
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-lg flex items-start space-x-4`}>
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Telepon</h3>
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{contactInfo.phone}</p>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-500'} text-sm`}>Senin - Sabtu, 08.00 - 16.00</p>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-lg flex items-start space-x-4`}>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>WhatsApp</h3>
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{contactInfo.whatsapp.registration} (Pendaftaran)</p>
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{contactInfo.whatsapp.igd} (IGD 24 Jam)</p>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-lg flex items-start space-x-4`}>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Email</h3>
                {contactInfo.email.map((email, i) => (
                  <p key={i} className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{email}</p>
                ))}
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-lg flex items-start space-x-4`}>
              <div className="bg-gradient-to-br from-purple-500 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Alamat</h3>
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {contactInfo.address.street}<br />
                  {contactInfo.address.district}<br />
                  {contactInfo.address.city}
                </p>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-lg`}>
              <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Media Sosial</h3>
              <div className="flex items-center space-x-4">
                <a href={contactInfo.social.instagram} className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href={contactInfo.social.facebook} className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href={contactInfo.social.website} className="bg-gradient-to-br from-teal-500 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden h-[600px]`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.834!2d112.237!3d-8.091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDUnMjguMCJTIDExMsKwMTQnMTMuMiJF!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}