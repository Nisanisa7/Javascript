// const name = [
//     'Abigail', 'Alexandra', 'Alison',
//     'Amanda', 'Angela','Bella', 
//     'Carol', 'Caroline', 'Carolyn',
//     'Deidre', 'Diana',  'Elizabeth',
//     'Ella', 'Faith', 'Olivia', 'Penelope'
// ];

// const result = Name.filter(Name => Name.length <= 5  );
// console.log(result);

const Name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela','Bella', 
    'Carol', 'Caroline', 'Carolyn',
    'Deidre', 'Diana',  'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];
function cariNama(key, num, callback){
    
    const indexedName = [];//menampung array result yang dicari
    for(let i = 0; i<Name.length; i++){
        if(Name[i].toLowerCase().includes(key.toLowerCase())){
            indexedName.push(Name[i]);
        }
    }
     const output = indexedName.slice(0, num);//startnya dari ke nol
     return callback(output);
}
cariNama('an', 2, function(q){
    console.log(q);
})

