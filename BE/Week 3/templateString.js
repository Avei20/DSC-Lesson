let string = "Hello World!"

//concat itu ngegabungin string sama string yang lain 
// contoh normalnya 

let nama = "budi"
let campus = "binus"

let string1 = "halo nama saya budi " + nama + " kampus saya di " + campus
// ini panjang banget dan ribet sehingga ada yang namanya template string 
// kalo yang biasa itu make ' atau " 
//template string ini pake ` 

let string2 = `halo nama saya ${nama} kampus saya di ${campus}`

//template string membuat jadi lebih singkat daripada capet menambah kan + di setiap kalimatnya 

console.log (string2)

