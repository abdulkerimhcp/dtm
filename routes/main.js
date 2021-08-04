const express = require('express');
const router = express.Router()
const Post = require('../models/Post')

router.get('/', function (req, res) {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/blog', (req, res) => {
    Post.find().then(posts => {
        res.render('blog', {posts:posts})
    })
})

router.get('/blog-single', (req, res) => {
    res.render('blog-single')
})

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})



module.exports = router