const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app= express();
const port = process.env.PORT || 8000;
//public static path
const staticPath =path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templetes/views");
const partial_path = path.join(__dirname, "../templetes/partials");

app.set("view engine ","hbs");

app.use(express.static(staticPath));
app.set("views",temp_path);
hbs.registerPartials(partial_path)


// routing
app.get("/", (req,res) =>{
    res.render("index.hbs")
});

app.get("/about", (req,res) =>{
    res.render("about.hbs")
});

app.get("/weather", (req,res) =>{
    res.render("weather.hbs")
});

app.get("/*", (req,res) =>{
    res.render("404error.hbs",{
errorMsg:"Opps! Page Not Found "
    })
});


app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})