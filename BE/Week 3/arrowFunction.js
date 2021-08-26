function hello (name) 
{
    return console.log (`Halo ${name}`)
}

hello ("nicko")

//arrow function 

add = (x, y) => x + y

console.log (add(1, 2))

// Kelebihan arrow function 
// arrow function gak perlu pake bracket kalo cuma 1 line 
// ga perlu pake keyword function 
// lebih simpel

// lexical this punya scooping yang beda dari function biasa

let cart = {
    string: "Add product with price: ",
    products: [
        {
            id: 1, 
            price: 2000, 
        },
        {
            id: 2, 
            price: 3000,
        },
    ],
    grandTotal: 0,
    
    //function biasa 
    // countTotalPrice() {
    //     this.products.forEach(function (product){
    //         console.log(this.string, product.price)
    //     }.bind(this)) //bind , call, reply 
    // }

    //arrowFunction
    // ga butuh bind karen scooping thisnya beda
    countTotalPrice() {
        this.products.forEach(product =>
            console.log(this.string, product.price)    
        )
    }
}

cart.countTotalPrice()

// bind, call, reply
// dia masukin object lain ke object dia / function dia 

// bind -<> cuma bisa 1x aja bisa masukin object lain, karena ini ditampung ke variable 
// x -> a, y -> a 
// itu ga akan bisa karena cuma satu kali masukin data 

const car = {
    price: 1000,
    type: "Honda HRV"
}

function getCar()
{
    console.log(`tipe mobilnya ${this.type} dengan harga ${this.price}`)
}
const myCar = getCar.bind(car) //hatus di tampung dulu ke variable 
console.log(myCar())

// call, apply -> bisa berkali-kali ngubah datanya
// x -> a, y -> a 
// ini bisa 

getCar.apply(car) // bisa langsung dipake tanpa variable karena dia bisa di masukin berkali kali 

