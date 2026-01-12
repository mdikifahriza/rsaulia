import { Metadata } from 'next';
import ServicesGrid from '@/components/sections/ServicesGrid';

export const metadata: Metadata = {
  title: 'Layanan - RSU Aulia Blitar',
  description: 'Layanan kesehatan lengkap: IGD 24 Jam, Poliklinik Spesialis, Rawat Inap, Laboratorium, dan lebih banyak lagi.',
};

export default function LayananPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">Kesehatan</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Pelayanan kesehatan terlengkap dengan fasilitas modern dan tenaga medis profesional
          </p>
        </div>
      </div>
      <ServicesGrid />
    </div>
  );
}