const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const config = require('./config.json');

module.exports = (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    console.log(opts);
    opts.secretOrKey = config.secret;

    passport.use(new JwtStrategy(opts,(jwt_payload,done) => {
        // console.log(jwt_payload.user.id);
        User.getUserById(jwt_payload.user.id)
        .then(user => {
            if(user){
                return done(null,user);
            }else{
                return done(null,false)
            }
        })
        .catch(error => done(error,false))
    }));
}