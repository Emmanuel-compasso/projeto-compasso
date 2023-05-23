const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(cors());

app.get('/api/user', (req, res) => {
    const file = path.join(__dirname, 'users.json');

    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao ler o arquivo.');
        } else {
            res.send(data);
        }
    })
})

app.get('/api/user/post', (req, res) => {
    const file = path.join(__dirname, 'posts.json');

    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao ler o arquivo.');
        } else {
            res.send(data);
        }
    })
})

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log('Api rodando...')
})