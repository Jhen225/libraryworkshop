var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
const config = require('../config/config.json');
var Schema = mongoose.Schema;
const SALT_FACTOR = 10;

var UserSchema = new Schema({
    'name':{type:String, required:true},
    'email':{type:String, required:true},
    'username':{type:String, required:true},
    'password':{type:String, required:true}
});

UserSchema.pre('save',function(next){
    var user = this;
    console.log(user)
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_FACTOR)
    .then(salt=>{
        bcrypt.hash(user.password,SALT_FACTOR)
        .then(hash=>{
            user.password = hash;
            next();
        })
        .catch(error =>{
            next(error);
        });
    })
})



// UserSchema.methods.comparePassword = function(user){
//     return new Promise((resolve,reject) => {
//         bcrypt.compare(user.password,result[0].password)
//         .then(isMatch => {
//             resolve(isMatch)
//         })
//         .catch(error => {
//             reject(error);
//         })
//         console.log(user.username);
//     })
// }

 var userModel = module.exports = mongoose.model('User',UserSchema);

 module.exports.getUserById = (id) => {
    return new Promise((resolve,reject)=>{
        userModel.findById(id)
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
 }

  module.exports.getUserByUsername = (username) => {
    return new Promise((resolve,reject)=>{
        userModel.findOne({username: username})
        .then(result => resolve(result))
        .catch(error => reject(error));
    })
 }

module.exports.comparePassword = (user) => {
    return new Promise((resolve,reject) => {
        userModel.findOne({username:user.username})
        .then(result => {
            if(result.password){
                bcrypt.compare(user.password,result.password)
                .then(isMatch => resolve(isMatch))
                .catch(error => reject(error));
            }else{
                resolve(false);
            }

        })
        .catch(error => reject(error));
    })
}

module.exports.hashPassword = (password) => {
    return new Promise((resolve,reject) => {
        bcrypt.genSalt(10,(err,salt) => {
            bcrypt.hash(password,salt)
            .then(hash => resolve(hash))
            .catch(err => reject(err));
        });
    })
}

module.exports.generateToken = (username) => {
    return new Promise((resolve,reject) => {
        userModel.findOne({username:username})
        .then(result => {

            jwt.sign({user:{id:result.id,username:result.username}},config.secret,{expiresIn:86400},(err,token) => {
                if(err) reject(err);

                resolve({token:token,user:{id:result.id,username:result.username}});
            })
        })
        .catch(error => reject(error));
    })
}