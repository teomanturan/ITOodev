const fs = require('fs');


let students = [{name:"Teoman",surname:"Turan", number:"542325423"},
    {name:"Faruk",surname:"Bağcı", number:"582357238"},
    {name:"Ahmet",surname:"Yıldız", number:"554311335"},
    {name:"Canan",surname:"Demir", number:"55435234"},
    {name:"Cem",surname:"Kaya", number:"523432567"},
    {name:"Aslı",surname:"Yılmaz", number:"549762345"},
    {name:"Zeynep",surname:"Türk", number:"5442145723"},
    {name:"İrfan",surname:"Alış", number:"58456342"},
    {name:"Yunus",surname:"Van", number:"58132025"},
    {name:"Kürşat",surname:"Alp", number:"5595620151"},
];

function namePrint(students,i){
    console.log("İsim:  "+students[i].name,"Soyisim: "+students[i].surname,"Telefon: "+students[i].number,"Vize: "+students[i].midterm,"Final: "+students[i].final);
}

for(let i in students){
    students[i].midterm = Math.floor(Math.random() * 101);;
    students[i].final = Math.floor(Math.random() * 101);
}

for(let i=0; i < students.length;i++){
    namePrint(students,i);
}

let i=0;
while(i < students.length){
    namePrint(students,i);
    i++;
}
let k=0;
do {
    namePrint(students,k);
    k++;
} while (k < students.length);

for (let i in students) {
    namePrint(students,i);
}

const jsonData = JSON.stringify(students,null,2);

fs.writeFile('data.txt',jsonData,(err) => {
    if (err) console.log(err);
    else {
        console.log("File written successfully\n");}
    }
);