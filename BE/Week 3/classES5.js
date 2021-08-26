//ES5 -> blum ada keyword "class" 
// jadi kalo mau bikin class pake prototype 
// prototype nih cara bikinnya 
// keyword function tapi nama functionnya pascal
// ada property namanya prototype -> masukin data ke function 

function Person () // langsung di tandai sama vscode sebagai class
{
    // ini declare di dalem function 
    this.name = "budi"
    this.campus = "binus"


    // method 
    this.describe = () => `nama : ${this.name} dari kampus ${this.campus}`
}

// kalo prototype
Person.prototype.name = "budi"
Person.prototype.campus = "binus"

function classPerson (name, campus)
{
    this.name = name
    this.campus = campus
}

const person = new Person()
const person2 = new classPerson("budi", "binus")

console.log (person) //keluar person aja ga kluar attributenya
console.log (person2) // ini keluar attributnya semua  



