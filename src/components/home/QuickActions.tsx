'use client';

import Link from 'next/link';
import { Calendar, User, Shield, Truck, ArrowRight } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function QuickActions() {
  const { darkMode } = useTheme();

  const actions = [
    {
      icon: Truck,
      title: 'IGD 24 Jam',
      description: 'Emergency siaga setiap saat',
      link: 'https://wa.me/6281260057899',
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Calendar,
      title: 'Daftar Online',
      description: 'Booking cepat & mudah',
      link: '/pendaftaran',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: User,
      title: 'Jadwal Dokter',
      description: 'Cek dokter spesialis',
      link: '/dokter',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Shield,
      title: 'Info BPJS',
      description: 'Kami terima BPJS',
      link: '/layanan',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 -mt-20 relative z-30 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <Link
            key={index}
            href={action.link}
            className={`${darkMode ? 'bg-slate-800' : 'bg-white'} p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
          >
            <div className={`bg-gradient-to-br ${action.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <action.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{action.title}</h3>
            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-4`}>{action.description}</p>
            <span className="text-teal-600 font-semibold flex items-center space-x-1">
              <span>Selengkapnya</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
