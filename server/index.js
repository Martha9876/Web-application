const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

var db = mysql.createConnection({
    host : '127.0.0.1',
    port     : '3306',
    user     : 'root', 
    password : 'Password21!',
    database: "Quiz"
});
app.get("/",(req,res)=>{

    res.send("hi")
  })  
  app.get("/getdata",(req,res)=>{
    let sql=`select * from users `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})

app.get("/getdata21",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question21 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})
app.get("/getdata22",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question22 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})
app.get("/getdata23",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question23 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})
app.get("/getdata24",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question24 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})

app.get("/getdata25",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question25 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})

app.get("/getdata41",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question41 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})

app.get("/getdata42",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question42 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})
app.get("/getdata43",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question43 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})

app.get("/getdata44",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question44 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})
app.get("/getdata45",(req,res)=>{
    const id=req.params.id;
    let sql=`select * from question45 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
    


    
})

app.get("/getdata50",(req,res)=>{
    let sql=`select * from question50 `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})

app.get("/getdatavalues3",(req,res)=>{
    let sql=`select * from outcome `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })

    
})


app.get("/getvalues",(req,res)=>{
    let sql=`select * from Welcome  `;
    db.query(sql,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else{
           res.send(result)
      
        }
    })
    
})

app.post('/first', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const butn = req.body.butn;

    db.query("INSERT INTO welcome (heading, subheading, butn) VALUES (?, ?, ?)", [heading, subheading, butn], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second2', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    db.query("INSERT INTO question21 (heading, subheading, descrption,answer1,map1,answer2,map2) VALUES (?, ?, ?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second21', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    db.query("INSERT INTO question22 (heading, subheading, descrption,answer1,map1,answer2,map2) VALUES (?, ?, ?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second22', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    db.query("INSERT INTO question23 (heading, subheading, descrption,answer1,map1,answer2,map2) VALUES (?, ?, ?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second23', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    db.query("INSERT INTO question24 (heading, subheading, descrption,answer1,map1,answer2,map2) VALUES (?, ?, ?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second24', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    db.query("INSERT INTO question25 (heading, subheading, descrption,answer1,map1,answer2,map2) VALUES (?, ?, ?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second4', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    const answer3 = req.body.answer3;
    const map3 = req.body.map3;
    const answer4 = req.body.answer4;
    const map4 = req.body.map4;
    db.query("INSERT INTO question41 (heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second41', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    const answer3 = req.body.answer3;
    const map3 = req.body.map3;
    const answer4 = req.body.answer4;
    const map4 = req.body.map4;
    db.query("INSERT INTO question42 (heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second42', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    const answer3 = req.body.answer3;
    const map3 = req.body.map3;
    const answer4 = req.body.answer4;
    const map4 = req.body.map4;
    db.query("INSERT INTO question43 (heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second43', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    const answer3 = req.body.answer3;
    const map3 = req.body.map3;
    const answer4 = req.body.answer4;
    const map4 = req.body.map4;
    db.query("INSERT INTO question44 (heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second44', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    const answer3 = req.body.answer3;
    const map3 = req.body.map3;
    const answer4 = req.body.answer4;
    const map4 = req.body.map4;
    db.query("INSERT INTO question45 (heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4) VALUES (?, ?, ?,?,?,?,?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/second50', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
    const answer1 = req.body.answer1;
    const map1 = req.body.map1;
    const answer2 = req.body.answer2;
    const map2 = req.body.map2;
    const answer3 = req.body.answer3;
    const map3 = req.body.map3;
    const answer4 = req.body.answer4;
    const map4 = req.body.map4;
    const answer5 = req.body.answer5;
    const map5 = req.body.map5;
    const answer6 = req.body.answer6;
    const map6 = req.body.map6;
    const answer7 = req.body.answer7;
    const map7 = req.body.map7;
    const answer8 = req.body.answer8;
    const map8 = req.body.map8;
    const answer9 = req.body.answer9;
    const map9 = req.body.map9;
    const answer10 = req.body.answer10;
    const map10 = req.body.map10;
   
    db.query("INSERT INTO question50 (heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4,answer5,map5,answer6,map6,answer7,map7,answer8,map8,answer9,map9,answer10,map10) VALUES (?,?,?,?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [heading, subheading, descrption,answer1,map1,answer2,map2,answer3,map3,answer4,map4,answer5,map5,answer6,map6,answer7,map7,answer8,map8,answer9,map9,answer10,map10], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/third', (req, res) => {
    const heading = req.body.heading;
    const subheading = req.body.subheading;
    const descrption = req.body.descrption;
   
    db.query("INSERT INTO outcome (heading, subheading, descrption) VALUES (?, ?, ?)", [heading, subheading, descrption], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})


app.post('/register', (req, res) => {
    const email = req.body.email;
    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const password = req.body.password;

    db.query("INSERT INTO users (email, firstname,surname, password) VALUES (?,?, ?, ?)", [email, firstname,surname, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})
app.post('/contactus', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;

    db.query("INSERT INTO contact (name, email,phone, subject) VALUES (?,?, ?, ?)", [name, email,phone, subject], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
})

app.post("/login", (req, res) => {
    const email = req.body.email;

    const password = req.body.password;
    db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG EMAIL ADDRESS OR PASSWORD!"})
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})
