// =============================
// ESLint Configuration File
// =============================
// File ini digunakan untuk menjaga kualitas dan konsistensi kode JavaScript/TypeScript.
// ESLint akan memberi peringatan atau error kalau ada gaya penulisan / logika yang tidak sesuai aturan.
// Tujuan: bikin kode rapi, konsisten, dan mudah dibaca oleh tim.

// ----------------------------------------
// Ekspor konfigurasi utama ESLint
// ----------------------------------------
module.exports = {
  root: true,
  // "root: true" artinya file ini jadi konfigurasi utama
  // ESLint nggak akan mencari konfigurasi di folder atasnya (lebih prioritas)

  env: {
    browser: true,   // Mengaktifkan variabel global browser (window, document, dll)
    es2021: true,    // Mengizinkan fitur ECMAScript 2021 (seperti optional chaining, dll)
  },

  parserOptions: {
    ecmaVersion: 2021,     // Versi ECMAScript yang digunakan
    sourceType: 'module',  // Supaya bisa pakai import/export
  },

  // ----------------------------------------
  // Plugin tambahan untuk linting
  // ----------------------------------------
  plugins: ['import', 'html', 'tailwindcss', 'prettier'],
  // - import → bantu atur urutan & validasi import/export
  // - html → lint file HTML yang berisi <script>
  // - tailwindcss → cek class Tailwind agar tidak salah ketik
  // - prettier → sinkronisasi format kode dengan Prettier

  // ----------------------------------------
  // Preset aturan dasar dari ESLint dan plugin
  // ----------------------------------------
  extends: [
    'eslint:recommended',               // Aturan dasar ESLint
    'plugin:import/recommended',        // Aturan tambahan dari plugin import
    'plugin:tailwindcss/recommended',   // Aturan tambahan dari plugin Tailwind
    'plugin:prettier/recommended',      // Integrasi dengan Prettier (biar nggak bentrok)
  ],

  // ----------------------------------------
  // Custom rules (aturan yang bisa kamu ubah)
  // ----------------------------------------
  rules: {
    'no-unused-vars': 'warn',  // Kasih peringatan kalau ada variabel yang nggak dipakai
    'import/order': [
      'warn',
      {
        // Atur urutan import supaya rapi dan konsisten
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always', // kasih baris kosong antar grup import
        alphabetize: { order: 'asc', caseInsensitive: true }, // urut abjad
      },
    ],
  },

  // ----------------------------------------
  // Pengaturan khusus untuk Tailwind CSS
  // ----------------------------------------
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'ctl'], // Fungsi helper yang sering dipakai untuk gabung class
      config: 'tailwind.config.js',           // Path ke file konfigurasi Tailwind
    },
  },

  // ----------------------------------------
  // Folder yang diabaikan oleh ESLint
  // ----------------------------------------
  ignorePatterns: ['node_modules/', 'public/css/', 'dist/', 'build/'],
  // Artinya ESLint tidak akan ngecek file di folder ini
};
