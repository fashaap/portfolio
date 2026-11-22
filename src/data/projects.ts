import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    title: 'CICALENGKA HISTORICAL',
    dirName: 'CLK HISTORICAL',
    previewUrl: '/cicalengka_historical.png',
    description: 'Komunitas sejarah kecil di kabupaten bandung. Website berupa artikel sejarah, dokumentasi visual dll.',
    tech: ['Astro JS', 'Laravel', 'Tailwind-CSS', 'cPanel'],
    githubUrl: '/cicalengka_historical.png',
    liveUrl: 'https://tjitjalengkahistorical.com/'
  },
  {
    title: 'SIMIKA (Sistem Informasi Izin Keluar Siswa)',
    dirName: 'SIMIKA',
    previewUrl: '/SIMIKA.png',
    description: 'Perancangan Metode GPS Tracking, Sistem Informasi Izin Keluar Siswa dengan Menggunakan Aplikasi Berbasis Mobile, Studi Kasus SMA PGRI Cicalengka.',
    tech: ['React JS', 'React Native', 'EXPRESS JS', 'POSTGRESQL', 'FIREBASE'],
    githubUrl: 'https://github.com/fashaap/OPSI-FRONTEND-MOBILE',
    liveUrl: 'https://github.com/fashaap'
  },
  {
    title: 'MAJALAH SEJARAH',
    dirName: 'MAJALAH',
    previewUrl: '/Majalah.png',
    description: 'Website majalah untuk kemudahan pengunjung Cicalengka Historical melihat visual sejarah secara digital melalui website interaktif.',
    tech: ['React JS', 'Tailwind-CSS'],
    githubUrl: 'https://github.com/fashaap',
    liveUrl: 'https://cicalengkahistorical.vercel.app/buku-visualisasi'
  },
  {
    title: 'SOUNDBOARD',
    dirName: 'SOUNDBOARD',
    previewUrl: '/soundboard.png',
    description: 'Website Soundboard & mixer volume ntuk penampilan theater.',
    tech: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/fashaap/soundpraktek.github.io',
    liveUrl: 'https://fashaap.github.io/soundpraktek.github.io/'
  },
  {
    title: 'PORTFOLIO',
    dirName: 'PORTFOLIO',
    previewUrl: '/portfolio.png',
    description: 'Website pribadi untuk menampilkan kumpulan karya terbaik, keterampilan, pengalaman, dan identitas seseorang atau agensi secara daring',
    tech: ['React JS', 'Tailwind-CSS'],
    githubUrl: 'https://github.com/fashaap/portfolio',
    liveUrl: 'https://cicalengkahistorical.vercel.app/buku-visualisasi'
  }
]
