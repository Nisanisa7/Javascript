//soal 4 spread dan destructuring
//soal A.
console.log("Tugas A Spread");
let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : "Sincere@april.biz",
    address : {
        street : "Kulas Light",
        suite : "Apt. 556",
        city : "Gwenborough",
        zipcode : "92998-3874",
    },
    phone : "1-770-736-8-31 x56442",
    website : "hildegard.org",
};
//spread ubah data nama, email, hobi
const newData = {
    ...data,
    hobi :["gambar", "mendengarkan musik"],
    nama : "mahuwarni Hyinkhalis Sukerti",
    email : "mahuwarni.hyinka7@gmail.com",
};
console.log(data);
console.log(newData);

// soal B.
//destructuring
console.log("Tugas B Destructuring");

const{street, city} = data.address;
console.log('Street : ' +street);
console.log('city : '+city);
