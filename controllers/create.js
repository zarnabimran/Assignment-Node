const User = require("../db/Models/User");
const data = require("../config/userInfo");

module.exports = (req, res) => {
  //Create users in bulk
  
  data.map((userInfo, idx) => {
    if (userInfo) {
      User.create(userInfo, (err, user) => {
        if (err) {
          console.log("err",err);
          
          res.status(500).send({ message: "Internal server error" });       
        }
        if (user) {
          if (idx === 9 && !err) {
            return res.status(200).send({"message":"User's created successfully"})
          }
        }
      });
    }
  });


  //create user's manually

  // if(!req.body){
  //   res.status.send({message:"Data required"})
  // }
  // const{userName,email,name,phone,website,street,suite,city,zipCode,company}=req.body;

  // const userData={
  //    userName:userName,
  //    emailAddress:email,
  //    name:name,
  //    phoneNumber:phone,
  //    website:website,
  //    address:{
  //      street:street,
  //      suite:suite,
  //      city:city,
  //      zipCode:zipCode
  //    },
  //    companyName:{
  //      name:company
  //    }
  // }

  // User.create(userData, (err, user) => {
  //   if (err) {
  //     console.log(err);

  //     res.status(500).send({ message: "Internal server error" });
  //   }
  //   if (user) {
  //     res.status(200).send({ message: "User Successfully Created.!" });
  //   }
  // });
};
