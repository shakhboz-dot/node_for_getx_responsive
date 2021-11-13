const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecommendSchema = Schema({
    name: {
        type: [String],
        required: true,
        unique : true,
    },
    imageUrl: {
        type: String,
        required: true,
        unique: true,
    },
    newPrice: {
        type: String,
        required: true,
        unique: true,
    },
    oldPrice: {
        type: String,
        required: true,
        unique: true,
    },
    count: Number,
}, {collection: 'recommendations', timestamps: true});

const Recommendation = mongoose.model('recommendation', RecommendSchema);

module.exports = Recommendation;