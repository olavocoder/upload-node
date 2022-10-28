const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')

const url = 'https://media.revide.com.br/cache/60/41/6041ab236ad1b12fd8f9de9c41009c26.jpg';

https.get(url,(res) => {
    // Image will be stored at this path
    const path = `${__dirname}/img.jpeg`; 
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish',() => {
        filePath.close();
        console.log('Download Completed'); 
    })
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost/3000')
})