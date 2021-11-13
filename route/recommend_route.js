const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json('Recommend get');
});

router.post('/post', (req, res, next) => {
    res.json('Recommend post');
});

router.patch('/patch', (req, res, next) => {
    res.json('Recommend patch');
});

router.delete('/delete', (req, res, next) => {
    res.json('Recommend delete');
});

module.exports = router;