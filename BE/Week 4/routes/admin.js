const express = require('express')

const router = express.Router()

// : /admin/list
router.use ('/list', (req, res) => 
{
    res.json({path: '/admin/list', message: 'Welcome to Admin home page', data: null})
})

// : /admin/home
router.use ('/home', (req, res) => 
{
    res.json({path: '/admin/home', message: 'Welcome to Admin home page', data: null})
})

module.exports = router
// membuat file admin.js bisa dipake sama file js lainnya
