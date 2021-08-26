//DOM Sections 

//Get element by tag Name
// const var1 = document.getElementsByTagName('p')
// var1[1].style.fontSize = '100px'
// var1[1].innerHTML = 'ABC'

//get Element by ID 
// const var1 = document.getElementById("judul")

// var1.style.color = 'red'
// var1.style.backgroundColor = '#c6c6c6'
// var1.innerHTML = "diubah melalui DOM"

//get element by class Name
// const var2 = document.getElementsByClassName('p1')
// var2[0].style.color = 'blue'

//Query Selector 
// //but handle css yang di dalam node node 
// const var4 = document.querySelector('#b ul .li-3')
// //ini cuma ngebalikin 1 nilai jika li-3 dijadiin li 
// var4.innerHTML = 'diubah'


// //Query Selector All 
// const var5 = document.querySelectorAll('#b ul .li')
// var5[2].style.color = 'red'

//dibalikin ke dalam bentuk nodeList jadi harus pake index kalo mau akses nya 

// //DOM Manipulation 
// const var1 = document.querySelector('#judul')
// // var1.classList.add('iniClassBaru') //nambahin nama class
// var1.classList.toggle('toogle')
//toogle bisa nambahin class list yang baru atau ngehapus class list yang udah ada dengan cara masukin nama class tersebut ke dalam toogle

// function func()
// {
//     const fname = document.getElementById('fname').value
//     const lname = document.getElementById('lname').value
//     const check = document.getElementById('checkbox').checked

//     // console.log(check)
//     // alert(`${fname} ${lname}`)

//     // if (check) alert('Maaf LOGIN GAGAL!')
//     if (!check) document.getElementById('alertGagal').innerHTML = `Maaf Checkbox blum di check!`
// }

// const pBaru = document.createElement('p') // bikin element baru yaitu p
// const textBaru = document.createTextNode('ini p bari dari JS') // bikin sebuah value buat simpen iis element

// pBaru.appendChild(textBaru) // masukin text baru ke dalem pbaru jadi element p nya dah ada nilai 

// // const tambah = document.getElementById('A')
// // tambah.appendChild(pBaru) // masukin element p yang udah di buat tadi ke dalem section 

// const batas= document.querySelector("#A .target")
// const parent = document.getElementById('A')

// parent.insertBefore(pBaru, batas) // insert di sebelum batas minta parameter dua yang mau dimasukin sama mau dimasukin sebelum apa

const var1 = document.getElementById('A')
var1.addEventListener('click', function(){
    var1.style.backgroundColor = 'blue'
})

var1.addEventListener('mouseenter', function()
{
    var1.style.backgroundColor = 'yellow'
})

var1.addEventListener('mouseleave', function(){
    var1.style.backgroundColor = 'green'
})