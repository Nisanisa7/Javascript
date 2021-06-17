//soal no 3
const printSegitiga = 5;

//mengecek tipe data
if (typeof printSegitiga == "number") {
   for (let i = printSegitiga; i > 0; i--) {
        let num = 1;//buat counting
        let space = [];//buat nampung
      for (let j = 0; j < i; j++) {
         space.push(num);
         num++
      
        
      }
      console.log(space.join(" "));
   }
} else {
    alert('Data Harus Number');
}