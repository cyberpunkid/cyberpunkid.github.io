/**
 * ============================================================
 *  CyberpunkID — FILE KONFIGURASI KONTEN
 * ============================================================
 *  Semua teks yang tampil di website ada di sini.
 *  Edit file ini untuk mengubah tampilan teks di web.
 *
 *  CARA PAKAI:
 *  - Setiap teks punya dua versi: id (Indonesia) dan en (Inggris)
 *  - Ganti teks di antara tanda kutip "..."
 *  - Simpan file, refresh browser — perubahan langsung terlihat
 *
 *  CATATAN:
 *  - Jangan hapus tanda koma (,) di akhir baris
 *  - Jangan hapus tanda kurung kurawal { } dan [ ]
 *  - Tanda <br> = ganti baris, <strong> = teks tebal
 * ============================================================
 */

const SITE = {

  // ── IDENTITAS WEBSITE ──────────────────────────────────────
  // Tampil di: Logo navbar (kiri atas) dan tab browser
  logo: {
    prefix : "Cyber",   // Teks sebelum garis bawah
    suffix : "PunkID",  // Teks setelah garis bawah
  },

  // ── HALAMAN BERANDA (index.html) ───────────────────────────
  home: {
    id: {
      // Teks kecil di atas nama besar
      eyebrow : "Profesional Keamanan Siber · Enthusiast IT · Kreator Konten",

      // Teks garis kedua di bawah nama (outline/stroke)
      role    : "Blue Teamer · Penulis · Kreator",

      // Paragraf deskripsi (gunakan <br> untuk ganti baris)
      desc    : "Setiap alert punya cerita. Setiap log menyimpan rahasia. 8+ tahun sebagai blue teamer. Saya mendengarkan apa yang coba disampaikan oleh sistem.",

      // Tombol CTA
      btn_works : "Tulisan Saya",
      btn_about : "Tentang Saya",
    },
    en: {
      eyebrow : "Cybersecurity Professional · IT Enthusiast · Content Creator",
      role    : "Blue Teamer · Writer · Creator",
      desc    : "Every alert has a story. Every log has a secret. 8+ years as a blue teamer. I listen to what systems are trying to say.",
      btn_works : "My Works",
      btn_about : "About Me",
    },
  },

  // ── NAVBAR ─────────────────────────────────────────────────
  nav: {
    id: {
      home  : "Beranda",
      works : "Tulisan",
      about : "Tentang",
    },
    en: {
      home  : "Home",
      works : "Works",
      about : "About Me",
    },
  },

  // ── HALAMAN TULISAN (works.html) ───────────────────────────
  works: {
    id: {
      section_tag   : "Transmisi",
      section_title : "Karya &amp; Tulisan",
      filter_all    : "Semua",
      filter_know   : "Pengetahuan",
      filter_tips   : "Tips &amp; Trik",
      filter_guide  : "Panduan",
      read_more     : "Baca Selengkapnya →",
      read          : "Baca →",
      coming_soon   : "(segera)",
    },
    en: {
      section_tag   : "Transmissions",
      section_title : "Works &amp; Writings",
      filter_all    : "All",
      filter_know   : "Knowledge",
      filter_tips   : "Tips &amp; Tricks",
      filter_guide  : "Guide",
      read_more     : "Read More →",
      read          : "Read →",
      coming_soon   : "(soon)",
    },
  },

  // ── HALAMAN TENTANG (about.html) ───────────────────────────
  about: {
    id: {
      section_tag   : "Log Transmisi",
      section_title : "Tentang Saya",

      // Nama yang tampil besar
      name  : "CyberPunkID",

      // Teks role di bawah nama
      role  : "Blue Teamer · Enthusiast IT · Kreator Konten",

      // Bio (gunakan <br><br> untuk paragraf baru, <strong> untuk tebal)
      bio   : "Halo! Saya seorang <strong>blue teamer</strong> dengan 8+ tahun pengalaman di dunia keamanan siber. Setiap hari berkutat dengan log, alert, dan anomali jaringan — dan percaya bahwa setiap insiden punya cerita yang layak dibagikan.<br><br>Lewat tulisan dan konten, saya ingin membuat topik <strong>keamanan siber dan IT</strong> lebih mudah dipahami — baik untuk pemula maupun profesional yang ingin memperluas perspektif.<br><br>Sesekali juga membuat <strong>konten video</strong> tentang tools, teknik, dan pengalaman nyata di lapangan.",

      // Label bagian skill/topik
      skills_label  : "Topik yang Saya Tulis",

      // Daftar skill tags (tambah atau hapus sesuai kebutuhan)
      skills : [
        "Blue Team", "Cybersecurity", "SIEM", "Linux",
        "Networking", "Threat Hunting", "Open Source", "IT Tips"
      ],

      // Label bagian sosial media
      social_label  : "Temukan Saya Di",

      // Label kotak kontak
      contact_label : "// Pesan Langsung",

      // Status badge (pojok kiri bawah foto)
      status : "Tersedia untuk Terhubung",
    },
    en: {
      section_tag   : "Transmission Log",
      section_title : "About Me",
      name  : "CyberPunkID",
      role  : "Blue Teamer · IT Enthusiast · Content Creator",
      bio   : "Hello! I'm a <strong>blue teamer</strong> with 8+ years of experience in cybersecurity. Every day is about logs, alerts, and network anomalies — and I believe every incident has a story worth sharing.<br><br>Through writing and content, I aim to make <strong>cybersecurity and IT</strong> topics more accessible — for both beginners and professionals looking to broaden their perspective.<br><br>Occasionally I also create <strong>video content</strong> about tools, techniques, and real-world field experience.",
      skills_label  : "Topics I Write About",
      skills : [
        "Blue Team", "Cybersecurity", "SIEM", "Linux",
        "Networking", "Threat Hunting", "Open Source", "IT Tips"
      ],
      social_label  : "Find Me On",
      contact_label : "// Direct Message",
      status : "Available to Connect",
    },
  },

  // ── SOSIAL MEDIA & KONTAK ───────────────────────────────────
  // Ganti username/link sesuai akun kamu
  social: {
    github    : "https://github.com/cyberpunkid",
    instagram : "https://www.instagram.com/cyberpunkid_",
    email     : "cyberfunkpunk99@protonmail.com",
    reddit    : "https://reddit.com/u/cyberpunkid",
    // twitter : "https://twitter.com/username",  // Aktifkan jika perlu
  },

  // ── DAFTAR ARTIKEL (works.html) ────────────────────────────
  // Untuk menambah artikel baru: copy salah satu blok di bawah,
  // ganti id, category, title, excerpt, date, dan url-nya.
  // Untuk menonaktifkan artikel: ubah active: true menjadi active: false
  articles: [
    {
      id       : "art-cybersec-aware",
      category : "knowledge",
      active   : true,
      url      : "articles/cybersecurity-awareness.html",
      featured : true,
      id_text: {
        cat     : "Pengetahuan",
        title   : "Mengapa Kesadaran Keamanan Siber Itu Penting untuk Semua Orang",
        excerpt : "Ancaman siber bukan hanya urusan tim IT. Di era digital ini, setiap orang adalah target — dan kesadaran adalah pertahanan pertama yang paling efektif.",
        date    : "2025 · 8 Menit Baca",
      },
      en_text: {
        cat     : "Knowledge",
        title   : "Why Cybersecurity Awareness Matters for Everyone",
        excerpt : "Cyber threats are not just an IT team concern. In this digital age, everyone is a target — and awareness is the most effective first line of defense.",
        date    : "2025 · 8 Min Read",
      },
    },
    {
      id       : "art-password-2026",
      category : "knowledge",
      active   : true,
      url      : "articles/artikel-password-2026.html",
      featured : false,
      id_text: {
        cat     : "Pengetahuan",
        title   : "Kenapa Password Saja Tidak Cukup di Tahun 2026",
        excerpt : "Credential stuffing, database bocor, dan bot brute force otomatis membuat password sendirian tidak lagi mampu melindungi akun Anda.",
        date    : "April 2026 · 7 Menit Baca",
      },
      en_text: {
        cat     : "Knowledge",
        title   : "Why Passwords Alone Are Not Enough in 2026",
        excerpt : "Credential stuffing, database leaks, and automated brute force bots mean passwords alone can no longer protect your accounts.",
        date    : "April 2026 · 7 Min Read",
      },
    },
    {
      id       : "art-phishing-modern",
      category : "knowledge",
      active   : true,
      url      : "articles/artikel-phishing-modern.html",
      featured : false,
      id_text: {
        cat     : "Pengetahuan",
        title   : "Apa Itu Phishing dan Kenapa Sekarang Lebih Sulit Dideteksi?",
        excerpt : "Phishing bukan lagi email penuh typo. Di era AI, serangan phishing modern dirancang khusus untuk Anda — bahasa sempurna, tampilan identik aslinya.",
        date    : "April 2026 · 8 Menit Baca",
      },
      en_text: {
        cat     : "Knowledge",
        title   : "What Is Phishing and Why Is It Harder to Detect Now?",
        excerpt : "Phishing is no longer a poorly written email. In the AI era, modern attacks are custom-designed for you — perfect language, visuals identical to the real thing.",
        date    : "April 2026 · 8 Min Read",
      },
    },
    {
      id       : "art-link-berbahaya",
      category : "tips",
      active   : true,
      url      : "articles/artikel-link-berbahaya.html",
      featured : false,
      id_text: {
        cat     : "Tips & Trik",
        title   : "7 Cara Mengenali Link Berbahaya Sebelum Anda Klik",
        excerpt : "Satu klik bisa meruntuhkan segalanya. Pelajari 7 teknik praktis untuk mendeteksi link berbahaya — dari domain typo hingga subdomain trick.",
        date    : "April 2026 · 5 Menit Baca",
      },
      en_text: {
        cat     : "Tips & Tricks",
        title   : "7 Ways to Spot Dangerous Links Before You Click",
        excerpt : "One click can bring everything crashing down. Learn 7 practical techniques to detect dangerous links — from domain typos to subdomain tricks.",
        date    : "April 2026 · 5 Min Read",
      },
    },
    {
      id       : "art-cara-aktifkan-mfa",
      category : "guide",
      active   : true,
      url      : "articles/artikel-cara-aktifkan-mfa.html",
      featured : false,
      id_text: {
        cat     : "Panduan",
        title   : "Cara Mengaktifkan Multi-Factor Authentication di Akun Penting Anda",
        excerpt : "Panduan langkah demi langkah mengaktifkan MFA di Gmail, Instagram, WhatsApp, dan marketplace. Lakukan sekarang, bukan nanti.",
        date    : "April 2026 · 10 Menit Baca",
      },
      en_text: {
        cat     : "Guide",
        title   : "How to Enable Multi-Factor Authentication on Your Important Accounts",
        excerpt : "Step-by-step guide to enabling MFA on Gmail, Instagram, WhatsApp, and major marketplaces. Do it now, not later.",
        date    : "April 2026 · 10 Min Read",
      },
    },
    {
      id       : "art-infostealer",
      category : "knowledge",
      active   : true,
      url      : "articles/artikel-infostealer.html",
      featured : false,
      id_text: {
        cat     : "Pengetahuan",
        title   : "Apa Itu Malware Infostealer dan Kenapa Banyak Korban Tidak Menyadarinya",
        excerpt : "Infostealer mencuri password, cookie sesi, dan data browser Anda dalam hitungan detik — tanpa gejala apapun. Saat Anda menyadarinya, semuanya sudah terlambat.",
        date    : "April 2026 · 8 Menit Baca",
      },
      en_text: {
        cat     : "Knowledge",
        title   : "What Is Infostealer Malware and Why Most Victims Never Know",
        excerpt : "Infostealers steal your passwords, session cookies, and browser data in seconds — with no visible symptoms. By the time you notice, it's already too late.",
        date    : "April 2026 · 8 Min Read",
      },
    },
    {
      id       : "art-wifi-publik",
      category : "tips",
      active   : true,
      url      : "articles/artikel-wifi-publik.html",
      featured : false,
      id_text: {
        cat     : "Tips & Trik",
        title   : "Cara Aman Menggunakan WiFi Publik Tanpa Takut Data Dicuri",
        excerpt : "WiFi gratis di kafe dan bandara adalah taman bermain penyerang. Pelajari risiko fake hotspot, sniffing, dan cara melindungi diri dengan benar.",
        date    : "April 2026 · 6 Menit Baca",
      },
      en_text: {
        cat     : "Tips & Tricks",
        title   : "How to Safely Use Public WiFi Without Fear of Data Theft",
        excerpt : "Free WiFi at cafes and airports is an attacker's playground. Learn the risks of fake hotspots, sniffing, and how to properly protect yourself.",
        date    : "April 2026 · 6 Min Read",
      },
    },
    {
      id       : "art-cek-data-bocor",
      category : "guide",
      active   : true,
      url      : "articles/artikel-cek-data-bocor.html",
      featured : false,
      id_text: {
        cat     : "Panduan",
        title   : "Cara Mengecek Apakah Email atau Password Anda Pernah Bocor di Internet",
        excerpt : "Data Anda mungkin sudah ada di tangan penyerang tanpa disadari. Gunakan HaveIBeenPwned dan Google Security Checkup untuk mengeceknya sekarang.",
        date    : "April 2026 · 6 Menit Baca",
      },
      en_text: {
        cat     : "Guide",
        title   : "How to Check If Your Email or Password Has Been Leaked Online",
        excerpt : "Your data may already be in attackers' hands without you knowing. Use HaveIBeenPwned and Google Security Checkup to verify right now.",
        date    : "April 2026 · 6 Min Read",
      },
    },
    {
      id       : "art-software-bajakan",
      category : "knowledge",
      active   : true,
      url      : "articles/artikel-software-bajakan.html",
      featured : false,
      id_text: {
        cat     : "Pengetahuan",
        title   : "Kenapa Software Bajakan Sangat Berbahaya untuk Laptop Anda",
        excerpt : "Tidak ada yang gratis di internet. Di balik crack Photoshop dan game bajakan tersembunyi trojan loader, crypto miner, dan backdoor yang bekerja diam-diam.",
        date    : "April 2026 · 7 Menit Baca",
      },
      en_text: {
        cat     : "Knowledge",
        title   : "Why Pirated Software Is Extremely Dangerous for Your Laptop",
        excerpt : "Nothing is truly free on the internet. Behind cracked Photoshop and pirated games hide trojan loaders, crypto miners, and silent backdoors.",
        date    : "April 2026 · 7 Min Read",
      },
    },
    {
      id       : "art-android-security",
      category : "tips",
      active   : true,
      url      : "articles/artikel-android-security.html",
      featured : false,
      id_text: {
        cat     : "Tips & Trik",
        title   : "10 Pengaturan Keamanan yang Harus Aktif di Android Anda Sekarang",
        excerpt : "Ponsel Android Anda menyimpan password dan data perbankan — tapi mungkin belum seaman yang Anda kira. Aktifkan 10 pengaturan ini tanpa keahlian teknis.",
        date    : "April 2026 · 8 Menit Baca",
      },
      en_text: {
        cat     : "Tips & Tricks",
        title   : "10 Security Settings You Must Enable on Your Android Right Now",
        excerpt : "Your Android stores passwords and banking data — but may not be as secure as you think. Enable these 10 settings without any technical expertise.",
        date    : "April 2026 · 8 Min Read",
      },
    },
    {
      id       : "art-security-checklist",
      category : "guide",
      active   : true,
      url      : "articles/artikel-security-checklist.html",
      featured : false,
      id_text: {
        cat     : "Panduan",
        title   : "Checklist Keamanan Digital Pribadi yang Bisa Anda Terapkan dalam 15 Menit",
        excerpt : "Tidak perlu jadi ahli siber. Checklist praktis ini bisa diselesaikan dalam 15 menit dan langsung meningkatkan keamanan digital Anda secara signifikan.",
        date    : "April 2026 · 5 Menit Baca",
      },
      en_text: {
        cat     : "Guide",
        title   : "Personal Digital Security Checklist You Can Complete in 15 Minutes",
        excerpt : "You don't need to be a security expert. This practical checklist takes 15 minutes and immediately and significantly improves your digital security.",
        date    : "April 2026 · 5 Min Read",
      },
    },
  ],

};
// Jangan hapus baris di bawah ini
