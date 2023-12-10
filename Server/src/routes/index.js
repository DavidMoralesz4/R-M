const {login} = require('../controllers/login.js');
const {getCharById} = require('../controllers/getCharById.js')
const { deleteFav, postFav } = require('../controllers/handleFavorites.js')

const router = require('express').Router()

router.get('/character/:id', (req, res) => {
    getCharById(req, res);
});

router.get('/login', (req, res) => {
    login(req, res);
});

router.post('/fav', (req, res) => {
    postFav(req, res);
});

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
}); 


module.exports = router;