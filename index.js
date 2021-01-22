//directory returned to executed script
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
    //res.sendFile(path.join(__dirname + '/index.html'));
});

// handler for /add/:input to render /list 
router.get('/add/:input', function (req, res) {
//event sent to connected users, object from parameter values parsed from URL path
    io.emit('calc', req.params.input);
    try {
        let records = db.getData("/list");
        let arr = records.answers;
        arr.push(req.params.input);
        db.push("/list", { arr: arr }, false);
    }
  
});

// handler for the /view path, which renders /list
router.get('/view', function (req, res) {
    res.json(db.getData("/list"));

});

//middleware mounted to path first
app.use('/', router);
app.use('/', express.static(__dirname + '/src/static'));
//web server listens to port 3000
const port = process.env.PORT || 3000
const server = app.listen(port);

//const server = require('http').createServer(app);
io = require('socket.io')(server);
io.on('connection', () => {
    console.log("client connected :)")
});

console.log('Running at Port ', port);

//imports module (JavaScript) using express framework, require function (Node) specifies module as string 'express'
const express = require('express');
//call returned object to create express app
const app = express();
//call file and directory paths
const path = require('path');
//app URI responds to client-side & delivers data, router is middleware
const router = express.Router();
//data stored by module into JSON fule using JS object 
const dbManager = require('node-json-db');
const dbConfig = require('node-json-db/dist/lib/JsonDBConfig');
let io = null;

let db = new dbManager.JsonDB(new dbConfig.Config("myDb", true, false, '/'));
