const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const app = express();
const hostname = '127.0.0.1'
const port = 5858
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const generateDate = require('./helpers/generateDate').generateDate
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')



mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
})

const mongoStore =  connectMongo(expressSession)
app.use(expressSession({
  secret:'testotesto',
  resave:false,
  saveUninitialized:true,
  store: new mongoStore({ mongooseConnection: mongoose.connection })
}))

//Flash-message Middleware
app.use((req,res,next)=>{
  res.locals.sessionFlash = req.session.sessionFlash
  delete req.session.sessionFlash
  next()
})
app.use(fileupload())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(bodyParser.json())


app.engine("handlebars", exphbs({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  helpers: {
    generateDate:generateDate
  }
}));

app.set("view engine", "handlebars");

const main = require('./routes/main')
app.use('/', main)

const posts = require('./routes/posts');
app.use('/posts', posts)

const users = require('./routes/users');
app.use('/users', users)

app.listen(port, hostname, () => {
  console.log(`Server Çalışıyor, http://${hostname}:${port}`)
})