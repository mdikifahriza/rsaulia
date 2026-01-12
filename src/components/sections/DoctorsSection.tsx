'use client';

import { Star, Clock, Users, Award } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { doctors } from '@/lib/data';

export default function DoctorsSection() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-slate-900' : 'bg-slate-50'} py-20`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
            Tim Dokter <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Spesialis</span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
            Dokter berpengalaman dan profesional siap melayani Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="relative h-64 overflow-hidden">
                <img src={doctor.photo} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-slate-800">{doctor.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{doctor.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{doctor.specialty}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-5 h-5 text-slate-400 mt-0.5" />
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{doctor.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-slate-400" />
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{doctor.patients}+ Pasien</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-slate-400" />
                    <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{doctor.experience} Pengalaman</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Buat Janji
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}