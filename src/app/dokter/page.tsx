import { Metadata } from 'next';
import DoctorsSection from '@/components/sections/DoctorsSection';

export const metadata: Metadata = {
  title: 'Jadwal Dokter - RSU Aulia Blitar',
  description: '15+ dokter spesialis berpengalaman siap melayani Anda',
};

export default function DokterPage() {
  return (
    <div className="pt-20">
      <DoctorsSection />
    </div>
  );
}