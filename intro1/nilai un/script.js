//soal 2 mencari rata rata nilai un
//menampilkan nilai rata-rata dan grade

const mtk = 100;
const ipa = 100;
const bhsIndonesia = 90;
const bhsInggris = 90;

//validasi Variabel
if (mtk == "" || ipa == "" || bhsIndonesia == "" || bhsInggris == "") {
    console.log('Semua nilai harus di isi');
} else {
    //Pencarian Rata Rata Seluruh Nilai
    const tambah = mtk + ipa + bhsIndonesia + bhsInggris;
    const bagi = tambah / 4;
    if (bagi >= 90 && bagi <= 100) {

        console.log("Rata-rata = " +bagi);
        console.log("Grade = A");

    } else if(bagi >= 80 && bagi <= 89){

        console.log("Rata-rata = " +bagi);
        console.log("Grade = B");

    } else if(bagi >= 70 && bagi <= 79){

        console.log("Rata-rata = " +bagi);
        console.log("Grade = C");

    } else if(bagi >= 60 && bagi <= 69){

        console.log("Rata-rata = " +bagi);
        console.log("Grade = D");

    } else if(bagi >= 0 && bagi <= 59){
        
        console.log("Rata-rata = " +bagi);
        console.log("Grade = E");
    } else {
        console.log('rata-rata dan grade tidak ada');
    }
}
