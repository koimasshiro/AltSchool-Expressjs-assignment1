const express = require('express');
const path = require('path');


const server = express();


const PORT = 5000;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


server.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'error.html'));
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
