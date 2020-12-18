const mongoose = require("mongoose")

//Database Configraton
exports.connect=()=>{    
mongoose.connect(process.env.MONGODB_URI,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
}).then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log(`Couldn't connect to MongoDB with uri : ${process.env.MONGODB_URI}`)
    console.log(err);
    process.exit(1);    
})
}