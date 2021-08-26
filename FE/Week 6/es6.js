// Tempalate Literal 
// ES5 kebawah 

//dua jenis pembuatan function ES 5 kebawah 
// function say(text)
// {
//     console.log (text)
// }

// say = function(text)
// {
//     console.log (text)
// }

//ES6

// say = (text) => 
// {
//     console.log(text);
// }

// promise 

// new Promise ((resolve, reject) =>
// {

// }).then(() => 
// {
//     //fungsi apa yang dilakuin pas promise dah complete
// }).catch(() =>
// {
//     //dimasukin kalo promisenya selesai atau gagal 
// })

// promise -> untuk menangani async function 
// biasa dipake kalo mau ambil data dari API 
// function fetchDataAsync(success, time)
// {
//     console.log ("fetch data started ...")
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() =>
//         {
//             console.log("fetch data success!")
//             if(success) 
//             {
//                 resolve({"nama" : "Jhon"})
//             }
//             else
//             {
//                 reject({"error" : "500"}) 
//             }
//         }, time)
//     })
// } 

// function btnFetch_Click()
// {
//     Promise.all([fetchDataAsync(true,5000), fetchDataAsync(true, 3000)])
//         .then((response) => 
//         {
//             console.log("more processing data...")
//         })
    
//     Promise.resolve('abc')

//     //sama ama 

//     new Promise ((resolve, reject) => {
//         resolve("abc")
//     })

    // new Promise ((resolve, reject) =>
    // {
    //     // resolve(fetchDataAsync(true, 5000))
    //     reject(fetchDataAsync(false, 5000))
    // }).then((response) => 
    // {   //masuk kalo bener
    //     console.log("more process after get data")
    // }).catch((response) =>
    // {   //masuk kalo gagal
    //     console.log("gagal")
    // })

    // fetchDataAsync(true, 5000)
    // console.log("more process after get data")
// }

// promise itu untung mensynchronize asyncronus operation dengan sychnronus operton 

//Class pake prototype

function Cat (name)
{
    this.name = name; // ini constructor 
}

Cat.prototype.talk = () =>
{
    console.log("meow")
}

cat = new Cat("AKMJ")


//class pake class
class Cat {
    constructor (name)
    {
        this.name = name
    }
    talk ()
    {
        console.log("meow")
    }
}
