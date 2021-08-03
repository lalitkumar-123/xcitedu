const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/login', (req, res) => {
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
})

app.post('/register', (req, res) => {
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);
})


app.listen(5000);