"use strict"
const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const FILE_PATH = './notes.json';

app.get ('/notes', (req, res) => {
    if(!fs.existsSync(FILE_PATH)) {
        return res.json([]);
    }
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    res.json(JSON.parse(data));
});

app.post ('/notes', (req, res) => {
    const data = req.body;
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
    console.log('Данные сохранены на сервере.')
    res.send('Данные сохранены!');
});

app.listen(3001, () => {
    console.log('Бэкенд запущен на порту 3001');
});