const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.listen(3002, () => {
  console.log('Server is running on port 3002');
});

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'authentication',
});

app.post('/signup', (req, res) => {
    const sentEmail = req.body.Email;
    const sentPassword = req.body.Password;
    const sentUsername = req.body.Username;

    const SQL = "INSERT INTO users (email, password, username) VALUES (?, ?, ?)";
    const Values = [sentEmail, sentPassword, sentUsername];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            console.log('User created successfully');
            res.send({message : 'User added'})
        }
    });
})

app.post('/login', (req, res) => {
    const sentLoginUserName = req.body.LoginUserName;
    const sentLoginPassword = req.body.LoginPassword;

    const SQL = "SELECT * FROM users WHERE username = ? && password = ?";
    const Values = [sentLoginUserName, sentLoginPassword];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res
            .send({err: err});  
        }   
        if (results.length > 0) {
            res.send({message : 'User found'})
        } else {
            res.send({message : 'User not found'})
        }
    })
})