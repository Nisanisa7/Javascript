
function selesksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    const tampung = [];
    if (dataArray.length < 5) {
       alert('dataArray kurang dari lima');
    }else if( nilaiAwal > nilaiAkhir){
       alert('nilai akhir harus lebih besar dari awal');
    }
    else if(typeof nilaiAwal !== 'number' || typeof nilaiAkhir !== 'number'){
        alert('data nilaiAkhir/nilaiAwal harus Number')
    }
    for (let i = 0; i < dataArray.length; i++) {
        if (nilaiAwal <= dataArray[i] && nilaiAkhir >= dataArray[i]) {
           tampung.push(dataArray[i])
        }
          }
    
    if(tampung.length > 0){
        console.log(tampung.sort(((a,b)=>a-b)));
    }else{
            alert('dataArray tidak ada');
    }
}
selesksiNilai(5,20,[2,25,14,4,3,1,19]);
// selesksiNilai(15,3,[2,25,14,4,3,1,19]);
// selesksiNilai(5,17,[2,25,4]);
