const express = require('express')

const { addUser, getUser, updateUser, deleteUser } = require('../controller/user')


const router = express.Router()

/*
*  (GET)    localhost:3000/user/    -> ambil semua user 
*  (POST)   localhost:3000/user/    -> nambahin user
*  (PATCH)  localhost:3000/user/:userId  -> update user data update ambil dari body 
*  (DELETE) localhost:3000/user/:userId -> untuk delete
*/

router
    .route('/')
    .get(getUser)
    .post(addUser);

router
    .route('/userId')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router