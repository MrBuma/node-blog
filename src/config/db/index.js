const mongoose = require('mongoose');

async function connect(){

    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
            });
        console.log("connect successfully!");
    } catch(err){
        console.log("connect is failed!");
    }

}

module.exports = { connect };