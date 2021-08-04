const path = require('path')
const express = require('express');
const exphbs  = require('express-handlebars')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express();
const hostname = '127.0.0.1'
const port = 5858
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')


mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(fileupload())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(bodyParser.json())


app.engine("handlebars", exphbs({
  handlebars: allowInsecurePrototypeAccess(Handlebars)
}), exphbs());
app.set("view engine", "handlebars");

const main = require('./routes/main')
app.use('/',main)

const posts = require('./routes/posts')
app.use('/posts',posts)

app.listen(port, hostname, () => {
    console.log(`Server Çalışıyor, http://${hostname}:${port}`)
})