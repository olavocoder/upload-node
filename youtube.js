const express = require('express')
const app = express()
const fs = require('fs');
const ytdl = require('ytdl-core');

app.get('/', (req, res)=>{
    res.header("Content-Disposition", 'attachmentt; filename="video.mp4"')
    return ytdl('https://www.youtube.com/watch?v=cs8rkoouPSU', { quality: 'highestaudio'})
    .pipe(res);
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost/3000')
})