const router = require('express').Router();
const Category = require('../schema/category_schema');


router.get('/', async (req, res, next) => {
    const getCategory = await Category.find({});
    res.json(getCategory);
});


router.post('/post', async (req, res, next) => {
    try {
        const adding = Category(req.body);
        const saving = await adding.save();
        res.json(saving);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete', async (req, res, next) => {
    const deleting = await Category.findOneAndDelete({gender: req.body.gender});
    res.json(deleting);
});

module.exports = router;