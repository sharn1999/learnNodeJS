import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));


app.get("/", (req, res) => {
    // minutes: date.getMinutes, hours: date.getHours ,day: date.getDay, month: date.getMonth, year: date.getFullYear

    res.render("index.ejs", {db: DB});
})

app.get("/add", (req, res) => {
    res.render("add.ejs");
})

app.post("/delete/:id", function(req, res){
          
    const id = req.params.id;
    DB.splice(id, 1);
    res.redirect("/");

    DB.forEach(el => {
        if(el.index > id){
            el.index = el.index-1;
        }
    })

    if(index>0){
        index--;
    }
});

let index = 0;

app.post('/add', (req, res) => {
    let temp = req.body;
    temp.index = index;
    temp.date = new Date();
    index++;
    DB.push(temp);


    res.render("add.ejs");
})

// app.get("/edit/:id", function(req, res){

//     res.render("edit.ejs");
// });


app.post("/edit/:id", function(req, res){
    const id = req.params.id;
    let temp = req.body;
    temp.index = +id;
    temp.date = new Date();

    DB.splice(id, 1, temp);

    res.render("edit.ejs", {db: DB});
});

app.listen(port, () => {
    console.log(port);
})




const DB = []
