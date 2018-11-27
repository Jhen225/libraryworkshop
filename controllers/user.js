var express = require('express');
var router = express.Router();
var User = require('../models/User')

router.post('/login', (req,res)=>{
    
    if((!req.body.username || (req.body.username === null)) || (!req.body.password || (req.body.password === null))){
        return res.status(400).json({success:false,msg:"invalid request"}).end();
    }

    const username = req.body.username;
    const password = req.body.password;

    User.comparePassword(req.body)
    .then(isMatch => {
        if(isMatch){
            User.generateToken(username)
            .then(result => res.json({success:true, token:'JWT ' + result.token, user:result.user}))
            .catch(error => console.log(error.message));
        } else {
            res.status(401).json({success:false, msg:'denied'}).end();
        }
        
    })
    .catch(error => console.log(error.message));
    // .catch(error => {
    //     throw error
    // });

})

router.post('/register',passport.authenticate('jwt',{session:false}), (req,res)=>{
    // console.log('username: ' + req.body.username);
    // console.log('password: ' + req.body.password);

    if((!req.body.name || (req.body.name === "")) || (!req.body.email || (req.body.email === "")) ||
     (!req.body.username || (req.body.username === "")) || (!req.body.password || (req.body.password === ""))){
        // console.log("name required")
        return res.status(400).json({success:false,msg:"invalid request"}).end();
    }
    else{
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        }
        
        new User(newUser).save()
        .then((result) => {
            res.json({success:true}).end();
        })
        .catch(error => {
            console.log(error.message);
            res.status(400).json({success:false}).end();
        });

    }

})

router.put('/:id',passport.authenticate('jwt',{session:false}),(req,res)=>{
    if(req.body.password && req.body.confirm){
        User.hashPassword(req.body.password)
        .then(hash => {
            User.findByIdAndUpdate(req.params.id,{password: hash})
            .then(user => {
                if(user){
                    res.json({success:true, msg:'User updated'}).end();
                } else{
                    res.status(400).json({success:false,msg:'User not updated'}).end();
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({success:false}).end();
            })
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).json({success:false}).end();
        })
    }
    
})


module.exports = router;