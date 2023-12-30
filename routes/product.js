const express = require('express');
const Product = require('../models/Product');
const router = express.Router();
const {verifyToken} = require('../middlewares/middleware')

router.get('/products',verifyToken,async (req,res)=>{
    const data = await Product.find({});
    res.render('index',{data});
})

router.get('/product/new', async (req,res) => {
   res.render('new');
})

router.post('/products', async (req,res)=>{
    let {name,image,description,price} = req.body;
    await Product.create({name,image,description,price});
    res.redirect('/products');
})

router.get('/product/:id', async (req,res)=>{
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('show', {foundProduct})
})

router.get('/product/:id/edit', async (req,res) => {
    const {id} = req.params;
    const foundProduct = await Product.findById(id);
    res.render('edit',{foundProduct});
})

router.patch('/product/:id', async (req,res)=>{
    const {id} = req.params;
    let {name,image,description,price} = req.body;
    await Product.findByIdAndUpdate(id, {name,image,description,price})
    res.redirect('/products');
})

router.delete('/product/:id', async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

module.exports = router;