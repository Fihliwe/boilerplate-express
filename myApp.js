let express = require('express');
let app = express();

index_html = __dirname + "/views/index.html";
app.get("/", (req, res) =>{
    res.sendFile(index_html);
});

style_css = __dirname + "/public";
app.use("/public", express.static(style_css))

//REST API integration
app.get("/json", (req, res) => {
    res.json(
        {"message": "Hello json"}
    )
})





























 module.exports = app;
