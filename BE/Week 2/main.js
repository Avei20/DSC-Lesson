// data type di JS 
// ada 3 tipe data var let sama const

// var x = 1;
// var x = "DSC2020";
// jika var maka x bisa di deklarasi dua kali 

// let x = 1;
// x = "DSC2020";
//jika let x tidak bisa di deklarasi dua kali namun datanya bisa di ganti isinya tanpa menggunakan let 

// const phi = 3.14;
// phi = 3.142; ini akan salah karena bonst nilainya tetap dan tidak bisa diubah sama sekali ini mirip dengan let namun isi datanya tidak bisa diubah 


//Input dan Output

// console.log(phi);

// let prompt = require('prompt');
// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
//     console.log ('Command-line input received: ');
//     console.log (' Username : ' + result.username);
//     console.log (' email : ' + result.email);
// });


//Selection 

// let num = 100;
// if (num % 2 == 0)
// {
//     console.log(num + " is Even Number");
// }
// else 
// {
//     console.log (num + " is Odd Number");
// }

// di js ada === 

// let num1 = 100; 
// let num2 = "100";

//jika === 2 kali akan dicek sampai tipe datanya jika dua kali maka hanya akan dicek sampai bagian indentik apa enggak saja


// Function 
// function isEquals (param1, param2)
// {
//     return (param1 == param2);
// }

// function isIdenticals (param1, param2)
// {
//     return (param1 === param2);
// }

// console.log (isEquals(num1,num2));
// console.log (isIdenticals(num1, num2));

// if (num1 === num2)
// {
//     console.log("Same");
// }
// else 
// {
//     console.log("Not same");
// }

//Repetition 

let min = 0;
let max = 10;

// while (min <= max)
// {
//     console.log (min);
//     min++;
// }

// function printRange (paramMax, paramMin=0) //memasukkan default nilai jika tidak diisi ketika dipanggil
// {
//     while (paramMin <= paramMax)
//     {
//     console.log (paramMin);
//     paramMin++;
//     }
// }

// printRange (max);

// for (let i=0; i<5; i++)
// {
//     for (let j=0; j<6; j++)
//     {
//         if (j <= i) process.stdout.write("* "); //print tanpa enter
//     }
//     console.log("");
// }

//array

// let students = ["Avei", "Vein", "Xein", "Lein"]; //ini array yang dimulai dari index ke 0
// console.log(students);

// function addStudent(paramArr, studentName)
// {
//     paramArr.push(studentName); //nambahin nilai array
//     console.log (paramArr);
// }

// function popStudents (paramArr)
// {
//     paramArr.pop(); //menghapus dari yang paling belakang
//     console.log (paramArr);
// }

// function shiftStudent(paramArr)
// {
//     paramArr.shift(); //mengapus dari yang paling depan
//     console.log(paramArr);
// }

// function changeStudent (paramArr, paramIdx, paramNewName)
// {
//     paramArr[paramIdx] = paramNewName;
//     console.log(paramArr);
// }



// addStudent(students, "Rein");
// addStudent(students, "Kein");
// popStudents(students);
// shiftStudent(students);
// changeStudent (students, 0, "Kein");

// console.log(students.length); //mereturn panjang arraynya 

//Exception Handling -> method untuk menangani dan memperbaiki suatu kondisi yang tidak sesuai
// Ex : mintanya string tapi dimasukinnya INT 
// ini membuat apabila ada anomali aneh maka sistem tidak akan gagal dan tetap berjalan

//JSON -> JavaScript Obeject Notation merupakan pertukaran data yang ringan dan mudah dibaca oleh manusia dan mudah dipahami oleh sistem.  

let studentJSON = '{"students": ['
    + '{"name" : "Avei", "age": 20},'
    + '{"name" : "Rein", "age": 19},'
    + '{"name" : "Xein", "age": 16},'
    + '{"name" : "Kein", "age": 15}'
    + ']}';

 studentJSON = JSON.parse(studentJSON); //mengubah array ke JSON

//  console.log(studentJSON);

function printStudent (paramJSON)
{
    let students = paramJSON.students;
    for(idx in students)
    {
        let student = students[idx];
        let name = student.name;
        let age = student.age;
        console.log(name, age);
    }
}

function addStudent (paramJSON, paramNama, paramAge)
{
    let student = {name: paramNama, age: paramAge};
    paramJSON.students.push(student);
    console.log ("Add " + paramNama + " as New Student");
}

function changeAge (paramJSON, paramName, paramNewAge)
{
    let student = paramJSON.students;
    let isFound = false;

    for(idx in student)
    {
        if (student[idx].name === paramName)
        {
            try
            {
                if (isNaN(paramNewAge)) throw "Invalid Age";
                student[idx].age = paramNewAge;
                isFound = true;
                console.log ("Change Student " + paramName + "'s Age is Succesfully");
            }
            catch(err)
            {
                console.log("Error : ", err.toString());
            }
            
            
        }
    }

    if (isFound == false) console.log ("Student " + paramName + " is Not Found");
}

function deleteStudent(paramJSON, paramName)
{
    let student = paramJSON.students;
    let isFound = false;

    for(idx in student)
    {
        if (student[idx].name === paramName)
        {
            student.splice(idx, 1);
            isFound = true;
            console.log(paramName + " has deleted! ");
        }
    }
    if (!isFound) console.log(paramName + " not Found in Database");
}

// addStudent (studentJSON, "Jein", 18);
changeAge (studentJSON, "Avei", "p0");
// deleteStudent(studentJSON, "Xein");
printStudent (studentJSON);



