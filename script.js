// contoh if,else,

let umur = 20;

if (umur >= 18) {
  console.log("Aku sudah dewasa.");
} else {
  console.log("Aku masih anak-anak atau remaja.");
}

// contoh Nested if

let nilaiUjian = 85;
let absensi = 90;

if (absensi >= 75) {
  if (nilaiUjian >= 70) {
    console.log("Selamat, Anda lulus!");
  } else {
    console.log("Anda gagal ujian karena nilai ujian Anda kurang dari 70.");
  }
} else {
  console.log("Anda gagal ujian karena absensi Anda kurang dari 75%.");
}

// contoh switch case

let kodeKendaraan = "MTR";
let jenisKendaraan;

switch (kodeKendaraan) {
  case "MTR":
    jenisKendaraan = "Motor";
    break;
  case "MBL":
    jenisKendaraan = "Mobil";
    break;
  case "BS":
    jenisKendaraan = "Bus";
    break;
  case "KB":
    jenisKendaraan = "Sepeda";
    break;
  default:
    jenisKendaraan = "Kode kendaraan tidak dikenali";
}

console.log(
  "Kode kendaraan " + kodeKendaraan + " adalah " + jenisKendaraan + "."
);

//  contoh for statement

for (let x = 10; x <= 20; x++) {
  console.log(x);
}

// contoh while
// sebuah program JavaScript yang menampilkan deret bilangan ganjil dari 1 hingga 9 menggunakan while loop.

let i = 1;
while (i <= 9) {
  console.log(i);
  i += 2;
}

// contoh do while
// sebuah program JavaScript yang menampilkan deret angka dari 10 hingga 5 menggunakan do while loop.

let x = 10;
do {
  console.log(x);
  x--;
} while (x >= 5);

// contoh function

function greeting() {
  console.log("Halo, Saya Salsabila Zandini!");
}

greeting();

function kali(a, b) {
  return a * b;
}
function tambah(a, b) {
  return a + b;
}
let hasilkali = kali(10, 7);
let hasil = tambah(10, 7);
console.log(hasilkali);
console.log(hasil);