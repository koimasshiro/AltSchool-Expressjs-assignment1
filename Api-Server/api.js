const express = require('express');
const studentsRouter = require('./api.router');

const PORT = 6000;

const app = express()

app.use(express.json())

app.use('/students', studentsRouter)

app.get('*', (req, res) => {
    res.status(404).json({
        data: null,
        error: 'Not found'
    })
})


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))