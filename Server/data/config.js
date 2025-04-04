const moongose = require("mongoose");
const connectDB = async () =>{
    const URL = "mongodb://admin:password@localhost:27018/";
    try{
        await moongose.connect(URL);
        console.log("DB running sucessfully");
    }catch(err){
        console.error("Failed to connect to the db :(")
        console.error(err);
    }
}

module.exports = {connectDB};