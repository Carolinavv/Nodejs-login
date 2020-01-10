const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');

});

router.get('/signup', (req, res, next) => { //envia
    res.render('signup');

});

router.post('/signup', (req, res, next) => { // escucha
    console.log(req.body);
    res.send('recived');
})

router.get('/signin', (req, res, next) => { //envia
    
})

router.post('/signip', (req, res, next) => { //escucha, valida
    
})

module.exports = router;