const GoogleStrategy = require ('passport.google-oauth20'). GoogleStrategy
const mongoose = require ('mongoose')
module.export = function (passport){
    passport.use(
        new GoogleStrategy ({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            callbackURL: '/auth/google/callback'
        })
    )
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
    },
    passport.serializeUser ((user, done) => {
        done(null, user.id)
    }),
    passport.deserializeUser((id, done)=>{}
}