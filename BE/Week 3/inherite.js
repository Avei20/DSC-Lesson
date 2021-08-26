class Animal {
    name = null
    constructor(name)
    {
        this.name = name
    }

    run ()
    {
        console.log (`${this.name} lagi berlari`)
    }
}

class Cat extends Animal {
    constructor(name) {
        super (name) // super ini dia ngakses constructor yang di parent nya 
    }


}

const cat = new Cat ("panda")

cat.run()