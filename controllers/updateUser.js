const User = require("../db/Models/User");
const { ObjectId } = require('mongodb')

module.exports = (req, res) => {
  const { emailAddress, name, phoneNumber, website, id } = req.body;
  

  User.updateOne({ _id: new ObjectId(id.toString()) },{$set:{emailAddress:emailAddress,name:name,phoneNumber:phoneNumber,website:website}},(err,user)=>{
    if(err){
    console.log(err);    
    res.status(200).send({message:"Internal Server Error"})
    }
    if(user){
      res.status(200).send({message:"User Updated Successfully"})
    }      
  });
};
