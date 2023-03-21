const express = require('express')
const mongoose = require('mongoose')
const ShoppingItem = require('./ShoppingItem')

// console.log("shopping model:",ShoppingItem);

const app = express()

const uri = "mongodb+srv://aviadc:omar2022@firstcluster.x6zcp.mongodb.net/shoppingList?retryWrites=true&w=majority"

const connect = async ()=>{
    try{
        mongoose.connect(uri);
        console.log("connect to mongoDB")
    }catch(error){
        console.log("error:",error)
    }
}

connect();

const addItem = async ()=>{
    const item = await ShoppingItem.create({item: "milk", amount: 3});
    console.log(item);
}

addItem();

app.get('/',(req,res)=>{
    console.log("hey mother fucker");
})

app.listen(5000,()=>{
    console.log('we are connected on port 5000');
    // console.log("app expresss", app);
})