const { urlencoded } = require('express');
const express = require('express');
require('./mongoose/mongod');
const recommendRoute = require('./route/recommend_route');
const trendingRoute = require('./route/trending_route');
const categoryRoute = require('./route/category_route');
const clothesRoute = require('./route/clothes_route');

const app = express();

app.use(express.json());
app.use(urlencoded({extended: false}));

// app.use('/user', userRoute);
app.use('/recommend', recommendRoute);
app.use('/trending', trendingRoute);
app.use('/category', categoryRoute);
app.use('/clothes', clothesRoute);
// app.use('order', orderRoute);

app.use((err, req, res, next) => {
    res.json({
        status: err.statusCode,
        message: err.message,
    })
});



app.listen('3000', () => console.log('Server is running'));