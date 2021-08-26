const mysql = require('mysql');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_hr'
});





app.listen(port, (err) => {

    if (err) console.log(err)
    console.log("server running")
})

app.get('/', (req, res) => {
    // connection.connect(function (err) {
    //     if (err) console.log(err)
    // });

    // connection.query(`SELECT * from departments WHERE department_name = "${connection.escape(req.body.location_id)}"`, function (error, results, fields) {
    //     if (error) console.log(error);
    //     // console.log('The solution is: ', results);

    //     res.json(results)
    // });

    connection.query(`SELECT * FROM departments WHERE department_name = ? AND location_id = ?`, [req.body.department_name, req.body.location_id], function (error, result) {
        if (error) console.log(error)

        res.json(result)
    })
    // res.send('Hello World')
    // connection.end();
})