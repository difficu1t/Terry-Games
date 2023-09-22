const express = require('express')
const path = require('path');

const app = express();

app.use(express.json({extended: true}))
app.use('/images', express.static(path.join('../client/src/img')))

app.use('/api', require('./routes/upload.route'))

const PORT = 5000;

app.listen(PORT, () => {
    console.log('start')
})