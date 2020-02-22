const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const mysqlDb = require('./mysqlDb');
const news = require('./router/news');

app.use(cors());
app.use(express.json());
app.use('/news', news);


const run = async ()=>{
    await mysqlDb.connect();

    app.listen(port);

    process.on('exit', ()=>{
        mysqlDb.disconnect();
    })
};

run().catch(error=>{
    console.error(error)
});