const mongodb = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World')
    let MongoDb = async ()=>{
    
        const connection = await mongodb.connect(url);
        console.log("data base is connected")
    
        const db = await connection.db('mymood')
        console.log('data base is created')
    
        const collection= await db.createCollection('helpboy')
        console.log('collection is created')
    
        collection.insertOne({ name: 'Satyam', role: 'Developer' });
            console.log('Document inserted:');
    }
    MongoDb()
})
app.listen(3000 , ()=>{
    console.log('server is running on port 3000')
})
