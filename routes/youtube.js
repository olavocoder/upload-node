const express = require('express')
const app = express()
const youtube =  require('../middlewares/youtubedown')
const fs = require('fs')
const dirSrc = '/home/raccoon/projeto-raccoon/downloadImage/src/youtube/'
const dirFile = '/home/raccoon/projeto-raccoon/downloadImage/public/videos/'
let fileName = ''
const bodyParser = require('body-parser')

// configuração necessaria para receber a api do front end
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/video', (req, res)=>{
    const path = dirFile + fileName + '.webm'
    res.download(path, (err)=>{
        fs.unlinkSync(path)
    })
})

app.get('/', (req, res)=>{
    res.sendFile(dirSrc + 'index.html')
})

app.get('/script.js', (req, res)=>{
    res.sendFile(dirSrc + 'script.js')
})

app.post('/down', (req, res)=>{
    const {url, nome} = req.body
    fileName = nome
    youtube(url, dirFile, nome, res = res)
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost:3000')
})