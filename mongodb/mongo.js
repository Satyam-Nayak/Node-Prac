const mongodb = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

let connectDb= async ()=>{
    const connection = await mongodb.connect(url);
    console.log("data base is connected")
};
connectDb();
