Rick and Morty Explorer

Introduction
Rick and Morty Explorer adalah aplikasi mobile yang menampilkan daftar karakter dari serial Rick and Morty menggunakan API resmi. Aplikasi ini dibangun dengan React Native dan menerapkan Clean Architecture. Fitur favorit disimpan secara lokal menggunakan SQLite, dan aplikasi juga mendukung pencarian serta tampilan detail karakter.

Features:

-Menampilkan daftar karakter dari Rick and Morty API
-Menampilkan detail karakter secara lengkap
-Mencari karakter berdasarkan nama
-Menambahkan dan menghapus karakter dari daftar favorit
-Menyimpan daftar favorit secara lokal dengan SQLite
-UI states: loading, loaded, error, dan empty
-Unit testing dan clean code

Libraries

-React Native (v0.74+)
-React Navigation - untuk navigasi antar layar
-SQLite - menggunakan react-native-sqlite-storage
-TypeScript
-Jest & React Native Testing Library - untuk pengujian
-Axios (jika digunakan sebagai pengganti fetch)
-ESLint & Prettier - untuk konsistensi penulisan kode
-Redux Toolkit / Zustand / Context API - untuk state management (pilih salah satu sesuai kebutuhan)

Project Structure

rickmorty-app/
│
├── __tests__/              # File pengujian
├── app/
│   ├── components/         # Komponen UI yang dapat digunakan kembali
│   ├── models/             # Tipe data dan antarmuka (interface)
│   ├── screens/            # Layar-layar aplikasi (Home, Detail, Favorite, dll)
│   ├── services/           # API dan database
│   ├── repository/         # Abstraksi untuk pengambilan dan penyimpanan data
│   ├── navigation/         # Navigasi layar
│   └── utils/              # Fungsi bantu dan konstanta
│
├── assets/                 # Gambar, ikon, font
├── App.tsx                 # Entry point aplikasi
└── README.md

APK Link:
