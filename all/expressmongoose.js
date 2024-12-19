const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://localhost:27017'; 

const connectDb = async () => {
    await mongoose.connect(url); 
    console.log('Connected to MongoDB server');

    const db = mongoose.connection.useDb('Mock');
    console.log('Database "mymood" is ready');

    const Mark1 = new mongoose.Schema({
        name: String,
        role: String,
    });

    const HelpBoy = db.model('Mark', Mark1);

    app.get('/', async (_, res) => {
        await HelpBoy.create({ name: 'yourname', role: 'mobando' });
        res.send('Hello World! Document inserted in "mymood" database.');
    });
};

connectDb();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
