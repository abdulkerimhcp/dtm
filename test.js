const mongoose = require('mongoose')


const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Post.create({
//     title:'Benim ikinci post başlığım',
//     content:'İkinci post içeriği, lorem ipsum text'
// },(error,post)=>{
//     console.log(error,post)
// })

// Post.find({
//   title:"Benim ikinci post başlığım"
// },(error,post)=>{
//   console.log(error, post)
// })

// Post.find({

// },(error,post)=>{
//   console.log(error, post)
// })


// Post.findById('60f48e5edf8345381458f20f',(error,post)=>{
//     console.log(error,post)
// })


// Post.findByIdAndUpdate('60f48e5edf8345381458f20f',{
//   title:'benim 1. Postum'
// },(err,post)=>{
//   console.log(err,post)
// })

// Post.findByIdAndDelete('60f48f46d7ed661f2c187bc8', (err, post) => {
//     console.log(err,post)
// })