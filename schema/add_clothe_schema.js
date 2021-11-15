const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClotheSchema = Schema({
    name: {
        type: String,
        required: true,
        unique : true,
    },
    imageUrl: {
        type: [String],
        required: true,
        unique: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    count: Number,
    like: Boolean,
},{timestamps: true});

const Clothes = mongoose.model('list', ClotheSchema);


module.exports = Clothes;