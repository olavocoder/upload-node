const fs = require('fs')
const https = require('https')

module.exports = function Downloadimage(url, diretorio){
    url.forEach(item => {
        https.get(item.link,(res) => {
            // Image will be stored at this path
            const path = `${diretorio}/${item.name}`; 
            const filePath = fs.createWriteStream(path);
            res.pipe(filePath);
            filePath.on('finish',() => {
                filePath.close();
                console.log('Download Completed'); 
            })
        })
    });
}

