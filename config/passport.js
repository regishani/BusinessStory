const passport = require('passport')
const GoogleStrategy = require ('passport-google-oauth20').Strategy
const mongoose = require ('mongoose')
const User = require('../models/user')
// module.exports = function (passport){
passport.use( 'google',
    new GoogleStrategy ({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: '/auth/google/callback'
    })
)
async (accessToken, refreshToken, profile, done) => {
    console.log(profile, "dcksklcs")
},
passport.serializeUser ((user, done) => {
    done(null, user.id)
}),
passport.deserializeUser((id, done)=>{
    User.findById (id, (err, user)=> done(err, user))
})
// }