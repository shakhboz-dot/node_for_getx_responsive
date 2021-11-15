const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendSchema = Schema({
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
}, {collection: 'recommendations', timestamps: true});

const Recommendation = mongoose.model('recommendation', RecommendSchema);

module.exports = Recommendation;