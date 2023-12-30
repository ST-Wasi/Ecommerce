const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "Iphone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1680266985445-84ee90d29ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBvbmV8ZW58MHx8MHx8fDA%3D",
        price: 140000,
        description: "Bohot mehenga  hai ye boss"
    },
    {
        name: "Macbook Pro",
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price: 243000,
        description: "Bohot mehenga  hai ye boss"
    },
    {
        name: "Apple Pencil",
        image: "https://images.unsplash.com/photo-1599249300675-c39f1dd2d6be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjBwZW5jaWx8ZW58MHx8MHx8fDA%3D",
        price: 10000,
        description: "Bohot mehenga  hai ye boss"
    },
    {
        name: "Apple Cloth",
        image: "https://images.unsplash.com/photo-1591195854242-8804547cdcab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RofGVufDB8fDB8fHww",
        price: 1500,
        description: "Bohot mehenga  hai ye boss"
    },
]

async function seedDb(){
    await Product.insertMany(products)
    console.log(`DB Seeded`)
}

module.exports = seedDb