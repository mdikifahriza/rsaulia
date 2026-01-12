// src/components/home/TrustBadges.tsx
import React from 'react';

export default function TrustBadges() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kenapa Memilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">RSU Aulia Blitar</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan pelayanan kesehatan terbaik dengan standar internasional dan kepercayaan penuh.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Badge 1: Sertifikasi */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-2">Sertifikasi ISO 9001</h3>
            <p className="text-slate-600 dark:text-slate-400">Standar manajemen mutu internasional untuk pelayanan kesehatan.</p>
          </div>
          {/* Badge 2: Pengalaman */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-xl font-semibold mb-2">15+ Dokter Spesialis</h3>
            <p className="text-slate-600 dark:text-slate-400">Tenaga medis berpengalaman siap melayani 24 jam.</p>
          </div>
          {/* Badge 3: Fasilitas */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🛏️</div>
            <h3 className="text-xl font-semibold mb-2">100+ Tempat Tidur</h3>
            <p className="text-slate-600 dark:text-slate-400">Fasilitas rawat inap modern dan nyaman untuk pasien.</p>
          </div>
          {/* Badge 4: Kepuasan */}
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">98% Kepuasan Pasien</h3>
            <p className="text-slate-600 dark:text-slate-400">Berdasarkan ulasan dan survei dari ribuan pasien kami.</p>
          </div>
        </div>
      </div>
    </section>
  );
}