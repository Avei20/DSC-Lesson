const express = require(`express`)


const userRoute = require('./src/routes/user');

const app = express()

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.use('/user', userRoute);

// app.get('/', (req, res) => {
//     let query = `SELECT * FROM users`
//     conn.query(query, (err, result, field) => {
//         res.send({ mesaage: "Hello World", data: result })
//     })
// })

app.listen(3000, console.log(`listening port 3000`))