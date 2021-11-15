const mongoose = require('mongoose');
const ClotheSchema = require('./clothes_schema');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    gender: {
        type: String,
        enum: ['MAN', 'WOMAN'],
        required: true,
        uppercase: true,
        unique: true,
    },
    clothes: [ClotheSchema],
}, {collection: 'category', timestamps: true});


const Category = mongoose.model('category', CategorySchema);


module.exports = Category;
