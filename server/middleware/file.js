const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, '../client/src/img')
    },
    filename(req, file, cb) {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf-8');
        cb(null, file.originalname)
    }
})

const types = [
    'image/png', 
    'image/jpg'
]

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)){
        cb(null, true);
    } else {
        cb(null, false)
    }
}

module.exports = multer({storage, fileFilter})