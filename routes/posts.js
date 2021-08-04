const express = require('express');
const Post = require('../models/Post');
const router = express.Router()
const path = require('path')


router.get('/new', (req, res) => {
    res.render('addpost')
})

router.get('/:id', (req, res) => {
    Post.findById(req.params.id).then(post => {
        res.render('post',{post})
    })
})

router.post('/test', (req, res) => {

    let post_image = req.files.post_image
    post_image.mv(path.resolve(__dirname,'../public/img/postimages',post_image.name))

    Post.create({
        ...req.body,
        post_image:`/img/postimages/${post_image.name}`
    })
  
    res.redirect('/')
})

module.exports = router