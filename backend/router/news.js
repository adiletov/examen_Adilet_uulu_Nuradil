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
    const news = await mysqlDb.getConnection().query('SELECT * FROM `news`');
    res.send(news)
});

router.get('/:id', async (req,res)=>{
    const id = req.params.id;
    const tools = await mysqlDb.getConnection().query('SELECT * FROM `news` WHERE `id` = ? ', id);
    res.send(tools)
});

router.post('/', upload.single('image'), async (req,res)=>{
    const posts = req.body;
    posts.date = new Date().toISOString();
    if (req.file){
        posts.image = req.file.filename
    }
    await mysqlDb.getConnection().query('INSERT INTO `news` (`heading`, `description`, `image`, `date`) ' +
        'VALUES (?,?,?,?)',
        [posts.heading, posts.description, posts.image, posts.date]
    );
    res.send('OK')
});

router.delete('/:id', async (req,res)=>{
    const id = req.params.id;
    await mysqlDb.getConnection().query('DELETE FROM `news` WHERE `id` = ?', id);
    res.send("Deleted")
});

module.exports = router;