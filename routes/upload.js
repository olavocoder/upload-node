const express = require('express')
const app = express()
const uploadUser = require('../middlewares/uploads')

app.post('/upload-image', uploadUser.single('image'), async(req, res)=>{
    if(req.file){
        return res.json({
            erro: false, 
            mensagem: 'upload realizado com sucesso'
        })
    }

    return res.status(400).json({
        erro: true,
        mensagem: "Erro, Upload não realizado com sucesso"
    })
})

app.listen(3000, () => {
    console.log('Servidor iniciado na porta http://localhost/3000')
})