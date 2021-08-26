const pool = require('../config/db')

//jsdoc
/**
 * Add User Controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * 
 */

const addUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)

    const conn = await pool.getConnection()

    let query = `INSERT INTO users (email, password) VALUES ('${email}', '${password}')`
    const [result] = await conn.query(query)

    res.send({ message: "POST user", data: result })
}

/**
 * Get User Controller
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * 
 */

const getUser = async (req, res) => {
    const { userId } = req.params;
    console.log(userId)
    const conn = await pool.getConnection()

    let query = ""
    if (userId !== undefined) {
        query = `SELECT * FROM users WHERE id = ${userId} `
    }
    else {
        query = `SELECT * FROM users WHERE deleted_at is NULL`
    }

    const [users] = await conn.query(query);
    await conn.release()
    return res.send({ message: "GET all user", data: users })
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * 
 */

const updateUser = (req, res) => {
    res.send({ message: "UPDATE user" })
}

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res
 * 
 */

const deleteUser = (req, res) => {
    res.send({ message: "DELETE user" })
}

module.exports = {
    addUser, getUser, updateUser, deleteUser
}