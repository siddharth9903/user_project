const User = require('../models/user')
// const jwt = require('jsonwebtoken')
const bcrypt=require('bcrypt')

exports.createUser = async (req, res) => {

    // User.findOne({email:req.body.email})
    //     .exec(async (err,isUser)=>{
    //     if(isUser) return res.status(400).send("email already exists")
    //     if(err){
    //         return res.send(error)
    //     }
    console.log("req.body", req.body);
    const { firstname,
        lastname,
        username,
        role,
        contactNumber,
        email,
        password,
        profilePicture } = req.body;

    const hash_password = await bcrypt.hash(password, 10)

    let user = new User({
        firstname,
        lastname,
        username,
        role: 'user',
        contactNumber,
        email,
        hash_password,
        profilePicture
    })

    user.save((err, data) => {
        if (err) {
            return res.status(500).send(err)
        }
        if (data) {
            console.log(data)
            return res.send(data)
        }

    })

    // })

}

