const multer = require('multer')

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cd) => {
            cd(null, './public/upload')
        },
        filename: (req, file, cd) =>{
            cd(null, Date.now().toString + "_" + file.originalname)
        }
    }),
    fileFilter: (req, file, cd) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find
        (formatoAceito => formatoAceito == file.mimetype);

        if(extensaoImg){
            return cd(null, true)
        }

        return cd(null, false)
    }
}))