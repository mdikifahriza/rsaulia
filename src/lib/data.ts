// src/lib/data.ts
import { 
  Siren, Baby, Stethoscope, BedDouble, Microscope, Activity,
  Star, Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Globe
} from 'lucide-react';
import { Doctor, Service, Testimonial, MCUPackage, RoomType, HeroSlide } from './types';

export const heroSlides: HeroSlide[] = [
  {
    title: "Melayani dengan Hati, Lebih dari 40 Tahun",
    subtitle: "Rumah Sakit Terakreditasi Paripurna - Pilihan Utama Keluarga Indonesia",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    cta: "Daftar Sekarang"
  },
  {
    title: "IGD 24 Jam Siaga untuk Anda",
    subtitle: "Tim Medis Profesional Siap Melayani Setiap Saat",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80",
    cta: "Hubungi IGD"
  },
  {
    title: "Layanan Persalinan Terpercaya",
    subtitle: "Kamar Bersalin Nyaman dengan Dokter Spesialis Berpengalaman",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
    cta: "Info Persalinan"
  }
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "dr. Ibnu Susanto, Sp.A",
    specialty: "Spesialis Anak",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    schedule: "Senin, Rabu, Jumat: 08.00-14.00",
    rating: 4.8,
    patients: 1250,
    education: "Universitas Airlangga",
    experience: "15 tahun"
  },
  {
    id: 2,
    name: "dr. Fajar Hadi Wijayanto, Sp.PD",
    specialty: "Spesialis Penyakit Dalam",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
    schedule: "Selasa, Kamis, Sabtu: 10.00-16.00",
    rating: 4.9,
    patients: 980,
    education: "Universitas Indonesia",
    experience: "12 tahun"
  },
  {
    id: 3,
    name: "dr. Rifqi Atho' Illah, Sp.S, M.Biomed",
    specialty: "Spesialis Saraf",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    schedule: "Senin, Rabu: 13.00-17.00",
    rating: 4.7,
    patients: 760,
    education: "Universitas Brawijaya",
    experience: "10 tahun"
  },
  {
    id: 4,
    name: "dr. Siti Aminah, Sp.OG",
    specialty: "Spesialis Kandungan",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    schedule: "Senin-Sabtu: 09.00-15.00",
    rating: 4.9,
    patients: 1450,
    education: "Universitas Gadjah Mada",
    experience: "18 tahun"
  },
  {
    id: 5,
    name: "dr. Didik Purbandiyono, Sp.P",
    specialty: "Spesialis Paru",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
    schedule: "Selasa, Kamis: 08.00-14.00",
    rating: 4.6,
    patients: 620,
    education: "Universitas Sebelas Maret",
    experience: "11 tahun"
  },
  {
    id: 6,
    name: "dr. Rina Wijaya, Sp.B",
    specialty: "Spesialis Bedah",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    schedule: "Senin, Rabu, Jumat: 10.00-16.00",
    rating: 4.8,
    patients: 890,
    education: "Universitas Diponegoro",
    experience: "14 tahun"
  }
];

export const services: Service[] = [
  {
    icon: Siren,
    title: "IGD 24 Jam",
    description: "Instalasi Gawat Darurat siaga 24/7 dengan tim medis profesional",
    color: "from-red-500 to-rose-600",
    features: ["Ambulans Siaga", "Tim Medis 24 Jam", "Penanganan Cepat"]
  },
  {
    icon: Baby,
    title: "Persalinan & Kebidanan",
    description: "Layanan persalinan normal dan caesar dengan dokter berpengalaman",
    color: "from-pink-500 to-rose-500",
    features: ["USG 4D", "Kamar VIP", "NICU Lengkap"]
  },
  {
    icon: Stethoscope,
    title: "Poliklinik Spesialis",
    description: "15+ poliklinik spesialis dengan dokter kompeten",
    color: "from-teal-500 to-cyan-600",
    features: ["Anak", "Kandungan", "Penyakit Dalam", "Bedah"]
  },
  {
    icon: BedDouble,
    title: "Rawat Inap",
    description: "Kamar rawat inap nyaman dari VIP hingga Kelas III",
    color: "from-blue-500 to-indigo-600",
    features: ["ICU/NICU", "HCU", "Ruang Isolasi"]
  },
  {
    icon: Microscope,
    title: "Laboratorium",
    description: "Pemeriksaan lab lengkap dengan hasil akurat dan cepat",
    color: "from-purple-500 to-violet-600",
    features: ["Cek Darah", "Tes Urine", "Imunologi"]
  },
  {
    icon: Activity,
    title: "Hemodialisa",
    description: "Cuci darah dengan mesin modern dan tenaga terlatih",
    color: "from-orange-500 to-amber-600",
    features: ["Mesin Modern", "Tenaga Ahli", "Jadwal Fleksibel"]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Ibu Siti Rahayu",
    service: "Persalinan",
    rating: 5,
    text: "Alhamdulillah melahirkan di RS Aulia sangat memuaskan. Dokter dan perawatnya ramah sekali, kamar bersih dan nyaman. Terima kasih RS Aulia!",
    date: "Desember 2024"
  },
  {
    name: "Bapak Andi Wijaya",
    service: "Rawat Inap",
    rating: 5,
    text: "Pelayanan sangat baik, perawat responsif dan dokter menjelaskan dengan detail. Harga juga terjangkau dengan BPJS.",
    date: "Januari 2025"
  },
  {
    name: "Ibu Dewi Anggraini",
    service: "Poliklinik Anak",
    rating: 5,
    text: "Dokter anak di sini sangat sabar dan baik sama anak-anak. Anak saya yang biasanya takut ke dokter jadi nyaman.",
    date: "Januari 2025"
  }
];

export const mcuPackages: MCUPackage[] = [
  {
    name: "Paket Basic",
    price: "Rp 500.000",
    features: [
      "Pemeriksaan Fisik",
      "Cek Darah Lengkap",
      "Tes Urine",
      "EKG",
      "Konsultasi Dokter"
    ],
    popular: false
  },
  {
    name: "Paket Silver",
    price: "Rp 1.200.000",
    features: [
      "Semua fitur Basic",
      "Rontgen Thorax",
      "USG Abdomen",
      "Fungsi Hati & Ginjal",
      "Gula Darah Puasa",
      "Kolesterol Total"
    ],
    popular: true
  },
  {
    name: "Paket Gold",
    price: "Rp 2.500.000",
    features: [
      "Semua fitur Silver",
      "Treadmill/EKG Exercise",
      "Marker Tumor",
      "Hepatitis Screening",
      "Konsultasi Spesialis",
      "Lunch & Snack"
    ],
    popular: false
  }
];

export const roomTypes: RoomType[] = [
  {
    type: "VIP",
    price: "Rp 500.000 - 750.000/hari",
    features: ["AC", "TV LCD", "Kulkas", "Sofa", "Kamar Mandi Dalam", "2 Bed Pasien + Penunggu"],
    available: 2,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
  },
  {
    type: "Kelas I",
    price: "Rp 300.000 - 400.000/hari",
    features: ["AC", "TV", "Kamar Mandi Dalam", "1-2 Bed"],
    available: 5,
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&q=80"
  },
  {
    type: "Kelas II",
    price: "Rp 200.000 - 250.000/hari",
    features: ["AC", "Kamar Mandi Dalam", "3-4 Bed"],
    available: 8,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80"
  },
  {
    type: "Kelas III",
    price: "BPJS/Rp 100.000/hari",
    features: ["Kipas Angin", "Kamar Mandi Luar", "5-6 Bed"],
    available: 12,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80"
  }
];

export const poliklinikList = [
  "Spesialis Anak", "Spesialis Kandungan", "Spesialis Penyakit Dalam",
  "Spesialis Bedah", "Spesialis Mata", "Spesialis THT",
  "Spesialis Saraf", "Spesialis Jantung", "Spesialis Gigi",
  "Spesialis Kulit", "Spesialis Orthopedi", "Spesialis Paru"
];

export const contactInfo = {
  phone: "(0342) 444168",
  whatsapp: {
    registration: "085607700553",
    igd: "081260057899"
  },
  email: ["rsumumaulia@gmail.com", "rs_aulia@yahoo.com"],
  address: {
    street: "Jl. Raya Utara Lodoyo No.3",
    district: "Lodoyo, Kalipang, Kec. Sutojayan",
    city: "Kabupaten Blitar, Jawa Timur 66172"
  },
  social: {
    instagram: "https://www.instagram.com/rsu_aulia/",
    facebook: "#",
    website: "https://rsuauliakabblitar.com"
  }
};