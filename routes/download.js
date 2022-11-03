const express = require('express')
const app = express()
const dowloadImage = require('../middlewares/downloads')
const bodyParser = require('body-parser')
const planilhaJson = require('../middlewares/json-planilha')
const dir = '/home/raccoon/projeto-raccoon/downloadImage/'

// configuração necessaria para receber a api do front end
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// rota do front end
app.get('/', (req, res)=>{
    res.sendFile(dir + 'src/download/index.html')
})

// rota do back end
app.post('/download', (req, res)=>{
    const diretorio = dir + `public/download`
    const dirCells = dir + `public/planilhas`
    const api = req.body

    planilhaJson(api, dirCells, 'github')

    const url = api.map(function(item){
        return{
            link: item.avatar_url,
            name: `${item.login}.png`
        }
    })

    dowloadImage(url, diretorio)
    console.log('A Api possui: ' + url.length + ' imagens')
})

// script de requisicao do front end
app.get('/script.js', (req, res)=>{
    res.sendFile(dir + 'src/download/script.js')
})

// servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost/3000')
})