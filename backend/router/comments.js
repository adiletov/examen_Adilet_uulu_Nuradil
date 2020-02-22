const express = require('express');
const router = express.Router();



router.post('/', (req,res)=>{
    const comment = req.body;
    console.log(comment);
    res.send('ok')
});

module.exports = router;