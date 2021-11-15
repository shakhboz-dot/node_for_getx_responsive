const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrendingSchema = Schema({
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
}, {collection: 'trendings', timestamps: true});

const Trending = mongoose.model('trending', TrendingSchema);

module.exports = Trending;