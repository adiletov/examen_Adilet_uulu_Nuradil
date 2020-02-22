const path = require('path');

const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const config = require('../config');
const mysqlDb = require('../mysqlDb');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,  config.uploadPath)
    },
    filename:(req,file,cb)=>{
        cb(null, nanoid() + path.extname(file.originalname))
    }
});


const upload = multer({storage});


router.get('/', async (req,res)=>{
    res.send('OK')
});
router.post('/', upload.single('image'), (req,res)=>{
    res.send('Post')
});

module.exports = router;