const express = require('express')
const { route } = require('./admin')

const router = express.Router()

const userController = require('../controllers/user')

// CRUD 
// CREATE user  (POST)
// READ user (GET)
// UPDATE user (PATCH)
// DELETE user (DELETE)

// ada 3 cara transport data
// - query string
    // -> localhost:8080/user/data?userid=2
    //  setelah tanda tanya adalah key 'userid' itu keynya 
    // 2 itu value dari 'userid'
    // kalo pathnya di klik return langsung key sama valuenya sebagai object
    // kalo mau masukin dua buah key bisa dikasih & terus tulis key sama valuenya 
    // -> localhost:8080/user/data?userid=2&message=hellothere

// - param
    // -> localhost:8080/user/data/2
// - body
    // -> localhost:8080/user/data
        // -> req.body {blablabla}
    // ga keliatan di browser
    // gabisa pake body kalo get

router.get('/queryStr', (req, res) =>
{
    console.log(req.query)
    const queryStr = req.query
    // ini ngebedah object buat langsung dimasukin ke dalamnya
    const {userid, message} = req.query
    // let userId = queryStr['userid']
    console.log(userid, message)

    res.json({ message: "testing add user", data : req.query})
})

//kalo pake param keynya ditaro di path sebelah sini : 
// keynya di taro di path trus dibanyakin /:nya jadi nanti url nya bakalan jadi kaya gini : 
// localhost:8080/user/param/4/haisayang
// nanti return nya sesuai sama value dari key yang ada di pathnya param 

router.get('/param/:userid/:message', (req, res) =>
{
    const {userid, message} = req.params
    console.log(userid, message)
})

router.post('/add', userController.addUser)


router.get('/', userController.getUser)


router.patch('/update/:userid', userController.patchUser)

router.delete ('/delete/:userid', userController.deleteUser)

module.exports = router