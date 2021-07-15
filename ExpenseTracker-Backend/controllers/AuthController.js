const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {

    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
            .then(user => {
                res.json({
                    status:'200',
                    message: 'User Added Successfully!'
                })
            })
            .catch(error => {
                res.json({
                    status:400,
                    message: 'An Error!'
                })
            })
    })

}

const login =(req,res,next)=>{
    var userName=req.body.name
    var password = req.body.password

    User.findOne({$or:[{email:userName}]})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password, function(err,result){
                if(err){
                    res.json({
                        error:err,
                        status:'500',
                    })
                }
                if(result){
                    let token =jwt.sign({name:user.name},'verySecretValue',{expiresIn:'24h'})
                    res.json({
                        status:'200',
                        message :'Login Successful!',
                        token
                    })
                }else{
                    res.json({
                        message:'Password Does not match',
                        status:'400',
                    })
                }
            })
        }else{
            res.json({
                message :'No User Found',
                status:'404',
            })
        }
    })
}

module.exports = {
    register,login
}