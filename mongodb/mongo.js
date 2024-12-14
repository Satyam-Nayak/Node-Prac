const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

let connectDb= async ()=>{
    const connection = await MongoClient.connect(url);
    console.log("data base is connected")
};
connectDb();
