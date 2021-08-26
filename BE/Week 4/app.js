// console.log ('hello world')
const express = require('express')

const app = express()

const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')

app.use(express.urlencoded({extended: true}))

app.use ('/admin', adminRoute)
app.use ('/user', userRoute)
// use di sini adalah abstraknya dari get jadi 


// membuat rooting 
app.get('/home', (req, res) => 
{
    console.log('Welcome to Home')
    // res.send('Hello aja deh') ini pake json
    res.json({path: '/home', message: 'Welcome to home page', data: null})
})

// pake use ga aik sebenernya 
// harusnya pake 
// GET -> Narik data
// POST -> nambah data
// PATCH -> update ke beberapa data
// PUT -> update ke semua data, jadi semua data itu di override. atau di timpa semua
// DELETE -> 

// Ex data ada name, age. 
// kalo PATCH dia bida update di name aja 
// kalo PUT semua data di update

app.listen(8080, console.log('initializing server ...'))
    .on ('error', (error) =>
    {
        console.log('Server Error Occured ...')
        process.exit(1)
    })
    .on ('listening', ()=>
    {
        console.log ("Server Running, please check localhost:80")
    })