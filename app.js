const path = require ('path')
const express = require ('express')
const dotenv = require ('dotenv')
const mongoose = require("mongoose")
const morgan = require ('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require ('express-session')
const connectDB = require ('./config/db')

//load config
dotenv.config =({path:'./config/config.env' })
//passport config
// module.exports = function(app, passport) {
  require('./config/passport')(passport)
// }

connectDB()
const app = express()
// logging
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

// handlebars
app.engine(
    '.hbs',
    exphbs.engine({
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
app.set('view engine', '.hbs')

//session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
})
)

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//router

app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000
app.listen (
    PORT,
    console.log(`Server is runningin ${process.env.NODE.ENV} mode on ${PORT}`)
)