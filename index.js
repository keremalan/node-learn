const express = require('express');
const port = 3333;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json()); 


// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on homes')
});

app.get('/posts', (req, res) => {
    try{
        const posts = Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

app.get('/specific', (req, res) => {
    res.send('Specific post');
});


// Connect to mongoose
mongoose.connect('mongodb+srv://keremalan:<Password>@rest.nm62a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, () => 
    console.log('connected to DB!')
);

// Start listenin to the server
app.listen(port, () => {
    console.log(`Server is running... at ${port}`)
});