// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FloatingEmergency from '@/components/layout/FloatingEmergency';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RSU Aulia Blitar - Rumah Sakit Terakreditasi Paripurna',
  description: 'Melayani dengan hati lebih dari 40 tahun. IGD 24 Jam, Poliklinik Spesialis, Rawat Inap, Medical Check-Up. BPJS & Umum.',
  keywords: ['RSU Aulia', 'Rumah Sakit Blitar', 'RS Blitar', 'Dokter Spesialis Blitar', 'IGD 24 Jam', 'BPJS Blitar'],
  authors: [{ name: 'RSU Aulia Blitar' }],
  openGraph: {
    title: 'RSU Aulia Blitar - Rumah Sakit Terakreditasi Paripurna',
    description: 'Melayani dengan hati lebih dari 40 tahun',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingEmergency />
        </ThemeProvider>
      </body>
    </html>
  );
}