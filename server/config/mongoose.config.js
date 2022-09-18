const mongoose = require("mongoose");


const dbName = "productsDB";

//if a DB by this name does not exist before running the first time, then this will create it 


mongoose.connect("mongodb+srv://davidqrico:gloZRMIKsjK5JtyO@product-manager.embafwz.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log(`Connected to the MongoDB Atlas: ${dbName}`)
    })
    .catch((err)=>{console.log(`error connecting to ${dbName}. Error:`,err)})