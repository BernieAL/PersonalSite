
const express = require('express')
const nodemon = require('nodemon')
const ejs = require('ejs')
const path = require('path')




// creating express app instance
const app = express();
const port = process.env.PORT || "5000";


//define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')


// setting view engine
app.set('views', path.join(__dirname,'views'))
app.set('partials',path.join(__dirname,'views/partials'))
app.set('view engine','ejs')




//setting static directory
app.use(express.static(publicDirectoryPath))



app.get('/',(req,res)=>{
    res.status(200).send("TEST")
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/Links',(req,res)=>{
    res.render('links')
})


// Start server instance, when server ready, perform callback to print port # to console
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})