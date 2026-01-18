const mongoose = require('mongoose');


const connectDB = async () => {

    await mongoose.connect('mongodb+srv://ghadiyuvraj08_db_user:1nLtEIiZ7ZAqYl5I@cluster0.2qyp5wl.mongodb.net/devTinder');

};


module.exports = connectDB;