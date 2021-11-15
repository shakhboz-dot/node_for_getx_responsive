const router = require('express').Router();
const Recommendation = require('../schema/recommend_schema');

router.get('/', async (req, res, next) => {
    const getRecommend = await Recommendation.find({});
    res.json(getRecommend);
});

router.post('/post', async (req, res, next) => {
    try {
        const obj = req.body;
        obj.like = true;
        const adding = Recommendation(obj);
        const saving = await adding.save();
        res.json(saving);
    } catch (error) {
        next(error);
    }
});

router.patch('/patch', async (req, res, next) => {
    try {
        const finding = await Recommendation.findOneAndUpdate(
            { name: req.body.name },
             {$set: {
                // name: req.body.name,
                newPrice: req.body.newPrice,
                oldPrice: req.body.oldPrice,
             }},
             );
        res.json(finding);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete', async (req, res, next) => {
    const deleting = await Recommendation.findByIdAndDelete(req.body._id);
    res.json(deleting);
});

module.exports = router;