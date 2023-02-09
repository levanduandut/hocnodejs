const mongoose = require('mongoose')

async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/duanoanh_dev',{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("OK Da ket noi")

    }
    catch(error){
        console.log("Fall")
    }
}

module.exports = { connect };