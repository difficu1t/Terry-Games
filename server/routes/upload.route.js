const { Router } = require('express');
const filemid = require('../middleware/file')

const router = Router();

router.post('/upload', filemid.single('img'), (req, res) => {
    try {
        if(req.file) {
            res.json(req.file)
        }
    } catch (error) {
        console.log(error);
    }as
})

module.exports = router;