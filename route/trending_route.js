const router = require('express').Router();
const Trending = require('../schema/trending_schema');

router.get('/', async (req, res, next) => {
    const getTrending = await Trending.find({});
    res.json(getTrending);
});

router.post('/post', async (req, res, next) => {
    try {
        const adding = Trending(req.body);
        const saving = await adding.save();
        res.json(saving);
    } catch (error) {
        next(error);
    }
});

router.patch('/patch', async (req, res, next) => {
    try {
        const finding = await Trending.findOneAndUpdate(
            { name: req.body.name },
            {
                $set: {
                    // name: req.body.name,
                    newPrice: req.body.newPrice,
                    oldPrice: req.body.oldPrice,
                }
            },
        );
        res.json(finding);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete', async (req, res, next) => {
    const deleting = await Trending.findByIdAndDelete(req.body._id);
    res.json(deleting);
});

module.exports = router;