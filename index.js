const express = require('express');
const path = require('path');
const app = express();
const seedDb = require('./seed')
const mongoose = require('mongoose');
const methodoverride = require('method-override')
const productRoutes = require('./routes/product')
const userRoutes = require('./routes/user')
const {verifyToken} = require('./middlewares/middleware')
mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
.then(()=>{
    console.log(`Database Connected Sucesfully`)
})
.catch((err)=>{
    console.log(`error is: ${err}`);
})

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
// app.use(express.urlencoded({extended: true}))
//seeding DB 


// middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodoverride('_method'));

//routes
app.use(productRoutes);
app.use(userRoutes)



let PORT = 8080;
app.listen(PORT,()=>{
    console.log(`listening to the port: ${PORT}`)
})