const express = require('express');
const mysqlDb = require('../mysqlDb');
const router = express.Router();

router.get('/:id', async (req,res)=>{
    const id  = req.params.id;
    const comments = await mysqlDb.getConnection().query('SELECT * FROM `comments` WHERE `news_id` = ?', id);
    res.send(comments)
});

router.post('/', async (req,res)=>{
    const comment = req.body;
    if (!comment.author){
        comment.author = 'anonymous'
    }
    await mysqlDb.getConnection().query(
        'INSERT INTO `comments` (`news_id`, `author`, `comments`)' +
        'VALUES (?,?,?)',
        [comment.id, comment.author, comment.comment],
    );
    res.send('Add new comment')
});

router.delete('/:id', async (req,res)=>{
    const id = req.params.id;
    await mysqlDb.getConnection().query('DELETE FROM `comments` WHERE `id` = ?', id);
    res.send("Deleted")
});

module.exports = router;