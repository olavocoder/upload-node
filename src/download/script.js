//funcao responsavel por pegar a rota no front, fazer a requisicao para trazer a api e enviar a api para o back
const urlBack = 'http://localhost:3000/download'
async function GeneratorApi(){
    const inputValue = document.getElementById('input').value
    let xhr = new XMLHttpRequest
    let url = urlBack
    xhr.open('POST', url, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Print received data from server
            alert('Status de rota 200')
        }
    }
    let data = []
    data = await fetch(inputValue)
        .then(res => res.json())
        .then(res => res)
        .catch(err => alert('algo errado: '+ err))
    data = JSON.stringify(data)
    xhr.send(data)
}