let express = require('express');
let app = express();

index_html = __dirname + "/views/index.html";
app.get("/", (req, res) =>{
    res.sendFile(index_html);
});

style_css = __dirname + "/public";
app.use("/public", express.static(style_css))





























 module.exports = app;
