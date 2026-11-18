/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi MIT + wajib atribusi (lihat LICENSE). */
/* =========================================================
   PENGATURAN TOKO & DATA PRODUK — cukup ubah berkas ini.
   ========================================================= */
window.TOKO = {
  nama: (window.TEMA && TEMA.nama) || 'QA Snack', // nama toko diambil dari tema.js
  slogan: 'Jajanan & Catering Purwokerto, Banyumas — pre-order, fresh dari panggangan',
  // Nomor WhatsApp format internasional tanpa + dan tanpa spasi (62 = Indonesia)
  wa: '6281914967171',
  mataUang: 'Rp',
  // Ongkir sederhana per kota (Rupiah). "Ambil di toko" = 0.
  ongkir: [
    { kota: 'Ambil di toko', biaya: 0 },
    { kota: 'Purwokerto', biaya: 10000 },
    { kota: 'Banyumas (luar Purwokerto)', biaya: 15000 },
    { kota: 'Kota lain (cek ongkir via chat)', biaya: 0, tanya: true }
  ],
  gratisOngkirMin: 0, // 0 = nonaktif (diisi Era bila ada promo gratis ongkir)
  // OPSIONAL: ambil produk dari Google Sheet (File → Bagikan → Publikasikan ke web → CSV).
  // Kolom: id,nama,kategori,harga,hargaCoret,deskripsi,varian,gambar,stok,label
  // varian: "Ukuran:S,M,L;Warna:Hitam,Putih"   gambar: url1|url2 (kosongkan = gambar ilustrasi)
  sheetCSV: '',
  // LOGO & FOTO — ganti cukup timpa berkas di img/ atau ubah path di sini.
  logo: 'img/logo.svg',              // tampil di header; kosongkan '' = inisial nama toko
  fotoKosong: 'img/foto-produk.svg'  // dipakai bila produk tanpa gambar / foto gagal dimuat
};

/* Gambar: isi dengan URL foto (mis. "img/kaos-1.jpg") ATAU objek ilustrasi
   { bentuk: 'kaos'|'tote'|'mug'|'topi'|'botol'|'buku'|'lilin'|'tas'|'tatakan', warna: '#hex', aksen: '#hex' }. */
window.PRODUK = [
  {
    id: 'banana-cake', nama: 'Banana Cake Bantarwuni', kategori: 'Kue', harga: 35000, stok: 20,
    deskripsi: 'Bolu pisang lembut dan manis, favorit untuk camilan sehari-hari maupun hantaran.',
    varian: [], gambar: []
  },
  {
    id: 'ayam-bakar-rujak', nama: 'Ayam Bakar Bumbu Rujak', kategori: 'Lauk', harga: 85000, label: 'Terlaris', stok: 20,
    deskripsi: 'Ayam bakar bumbu rujak khas QA Snack — pedas, manis, gurih, bumbunya meresap sampai ke dalam daging.',
    varian: [],
    gambar: ['https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmO19Uk-Q_px_SIqxn7dD6cxpobBEvEpxhDOtcWfzT26dIXapiP3iJbdlVrPXHwd8VHneoLZXd-HT-YLtQ2fSsxsvreAkE7Ihgjn-1XoQrxuvFjh7ICCjJzZHBMrmwrH3S7CVZ4ErnKBECBz5Jb6qGbCE-3Z7ikVW1bMMnePzBM5LrpK8Hz88jaNWwY4/w500/media-generation-ayam-bakar-qa-snack-poster-wa.jpg.webp']
  },
  {
    id: 'prol-tape', nama: 'Prol Tape Bantarwuni', kategori: 'Kue', harga: 40000, label: 'Terlaris', stok: 20,
    deskripsi: 'Prol tape premium topping keju & kismis, tanpa pengawet. Cocok untuk oleh-oleh & hantaran acara spesial.',
    varian: [],
    gambar: ['https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBflvEUyK8hlGsHxLMGHhM2Iy3G2tpD50un22Z9xlGVkGh1KgNuLJzqkgrqHQbAqUzYtVE7aR0rXQihbqEpRRrQrAaBVcOYtjHyBQ2IJ7gPiWn_7pcG7RHaMj90_vCsvTYH8djq0URACQ0FOl5_KWynAnstHKADm-3rqwkUV8OrrJUDfGwACeDLPEbJkk/w357-h640/prol%20tape%20promo.png']
  },
  {
    id: 'bubur-ubi-ungu', nama: 'Bubur Ubi Ungu', kategori: 'Camilan', harga: 4000, stok: 50,
    deskripsi: 'Camilan manis lembut khas QA Snack Bantarwuni. Pas untuk snack box & hajatan. Harga per cup.',
    varian: [],
    gambar: ['https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK_EO-r_qEYaE-Ty7oIRPc4AZO31HQ44sochi2WJ5bsiflSNJgBzra-5LElSBq914j59BMHMJW8Aod78bcOxIJrF5Za6pDJt6iI9gD8ffzKFrqu_jN3NSlMo7ogDPryRSwhhhbpxcp2dpLLcjyEeVKI80mI6wBpxq0E2g8g0SgB5YJy7avJFswN8Bk8iE/w500/bubur%20ubi%20ungu.jpg']
  },
  {
    id: 'melon-cake', nama: 'Melon Cake', kategori: 'Kue', harga: 55000, stok: 20,
    deskripsi: 'Dibuat dari sari melon asli.',
    varian: [],
    gambar: ['https://lh3.googleusercontent.com/AXO-tS8Q8tp7OdvYxzVr2Ifz3Q6vv6I-XsmaaEOpjEATEMxuUhY0JndCJ_hy09TQPxfUtSp-aOF-jwkwRg=w1351']
  },
  {
    id: 'aneka-pepes', nama: 'Aneka Pepes', kategori: 'Lauk', harga: 8000, stok: 30,
    deskripsi: 'Pepes tahu jamur, ikan kembung, ikan mujair, dan ayam — pilih variannya. Harga per bungkus.',
    varian: [{ nama: 'Isi', opsi: ['Tahu Jamur — Rp8.000', 'Ayam — Rp10.000', 'Ikan Kembung — Rp10.000', 'Ikan Mujair — Rp15.000'], tambah: { 'Ayam — Rp10.000': 2000, 'Ikan Kembung — Rp10.000': 2000, 'Ikan Mujair — Rp15.000': 7000 } }],
    gambar: ['img/pepes-mujair.jpg', 'https://lh3.googleusercontent.com/Rm6mG_zIbMXEsWr_IiBQB2S1DZQa4Y5q2sIuJIK23ao40kMR77E4fMP3p1F1pm8mwjR2iQVm64m3GRG7zw=w1351']
  },
  {
    id: 'nasi-bento', nama: 'Nasi Bento', kategori: 'Lauk', harga: 15000, stok: 20,
    deskripsi: 'Bermacam isi nasi bento sesuai permintaan. Harga tergantung isian, mulai Rp15.000.',
    varian: [],
    gambar: ['https://lh3.googleusercontent.com/nVsPquRbaeVZSx6_PK5Y8HZ9FoArplsQU5WiGTkHEI0ohF2yi_vBwEyZ6n5Cr7GMvLuSHD007rr9tzD2jQ=w1351']
  },
  {
    id: 'puding-mozaic', nama: 'Puding Mozaic', kategori: 'Camilan', harga: 2500, stok: 50,
    deskripsi: 'Puding mozaik warna-warni, manis dan segar. Favorit anak-anak untuk snack box.',
    varian: [], gambar: []
  },
  {
    id: 'brownies', nama: 'Brownies', kategori: 'Kue', harga: 55000, stok: 20,
    deskripsi: 'Brownies panggang cokelat legit, tekstur fudgy. Cocok untuk hantaran & oleh-oleh.',
    varian: [], gambar: []
  }
];