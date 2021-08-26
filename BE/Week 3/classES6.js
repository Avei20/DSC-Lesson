// JS engga pure OOP -> punya nama sendiri OOJS 
// jadi Object Oriented JS 
// ga punya interface 

class Person{

    name = null
    campus = null
    constructor (name, campus)
    {
        this.name = name
        this.campus = campus
    }

    setName(name) // bisa langsung tanpa tulis function di depannya
    {
        this.name = name
    }
    // ada setter sama getter 
    // setter buat nge set 
    // getter buat nge get
    // constructor adalah function pertama yang dipanggil pas objectnya di buat 

}

const person = new Person("Joni", "BINUS")

console.log (person)

person.setName("John")
console.log(person)