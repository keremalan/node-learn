const express = require('express');
var router = express.Router();
const Post = require('../models/Post');


router.get('/posts', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost = await post.save()
    res.json(savedPost);
    } catch(err){
        res.json({message: err});
    }
});

router.get('/transpirit', (req, res) => {
    res.send('fifi');
});

router.get('/:postId', (req, res) => {
    console.log(req.params.posdId);
});

module.exports = router;