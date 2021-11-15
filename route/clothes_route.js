const router = require('express').Router();
const Category = require('../schema/category_schema');
const AddClothes = require('../schema/add_clothe_schema');

router.post('/add', async (req, res, next) => {
    try {
        const findGender = await Category.findOne({ gender: req.body.gender });
        const clotheList = findGender.clothes;
        const validator = await AddClothes(req.body);
        clotheList.push(validator);
        const updateGender = await Category.updateOne({ gender: req.body.gender }, { clothes: clotheList });

        res.json(updateGender);
    } catch (error) {
        next(error);
    }
});




module.exports = router;