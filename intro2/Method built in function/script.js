//tugas 1
//10 method beserta contohnya


// 1.charAt
//charAt digunakan untuk mencari value pada index tertentu
//deklarasi string.charAt(index)
const nama = "Mahuwarni Hyinkhalis Sukerti";
console.log(nama.charAt(5));

//2. toLowerCase
//untuk mengconvert sebuah string menjadi huruf kecil
//string.toLowerCase();
const menang = "HOREEEE";
console.log(menang.toLowerCase());

//3. toUpperCase
//digunakan untuk mengconvert sebuah string menjadi huruf kapital
//string.toUpperCase
const hebat = "mantap!!!!";
console.log(hebat.toUpperCase());

//4. length
//digunakan untuk mencari tahu panjang pada sebuah variabel
const hewan = "hamster";
const len = hewan.length;
console.log(len);

//5. reverse
//digunakan untuk membalikkan urutan pada array;
const nomor = [1,2,3,4,5,6,7,8];
console.log(nomor.reverse());

//6. slice
//slice itu digunakan untuk mereturn elemen yang
//dipilih pada array sebagai data objek baru
//dari awal hingga akhir
//awal dan akhir ini adalah index pada item di array pertama
const animal = ['giraffe', 'monke' , 'fish', 'elephant'];
const animalC = animal.slice(1,3);

//7. concat
//digunakan untuk menggabungkan 2 array menjadi satu,
//method ini tidak mengubah array yang dah ada tapi mereturn array baru
const angka1 = [1,2,3,4,5];
const angka2 = [6,7,8,9,10];
const num = angka1.concat(angka2);
console.log(num);

//8. join
//digunakan untuk mereturn array sebagai string
//dan elemennya akan dipisahkan dengan separator yang ditentukan
const benda = ['kipas', 'meja', 'bangku'];
console.log(benda.join(" "));//ini separatornya

//9. toString
//toString
//untuk mengconvert tipe data lain jadi tipedata string
var makanan = ['coklat','kue', 'permen'];        
var str = makanan.toString();
console.log(str);

//10. Date
//untuk menampilkan tanggal dan waktu pada hari ini
var date = Date();
console.log("Date and Time :" +date);

