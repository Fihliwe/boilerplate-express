let express = require('express');
const req = require('express/lib/request');
require('dotenv').config()
let app = express();

// echo server
app.get("/:word/echo", function(req, res, next) {
    word = req.params.word
    next();
}, function(req, res) {
    res.json({echo : word})
})

//Get Query Parameter Input from the Client
app.get("/name", function(req, res) {
    var firstname = req.query.first;
    var lastname = req.query.last;
    res.json({name : `${firstname} ${lastname}`});
});

// Simple logger
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next()
})

app.get("/now", function(req, res, next) {
    req.time =  new Date().toString();
    next()
}, function(req, res) {
    res.json({"time": req.time})
})

index_html = __dirname + "/views/index.html";
app.get("/", (req, res) =>{
    res.sendFile(index_html);
});

style_css = __dirname + "/public";
app.use("/public", express.static(style_css))

//REST API integration
app.get('/json', (req, res) => {
    const message = "Hello json";
    const style = process.env.MESSAGE_STYLE;
    if (style === 'uppercase') {
        res.json({ message: message.toUpperCase() });
    } else {
        res.json({ message });
    }
});






























 module.exports = app;
