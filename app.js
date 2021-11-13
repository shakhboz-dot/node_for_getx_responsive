const { urlencoded } = require('express');
const express = require('express');
require('./mongoose/mongod');
const recommendRoute = require('./route/recommend_route')

const app = express();

app.use(express.json());
app.use(urlencoded({extended: false}));

// app.use('/user', userRoute);
app.use('/recommend', recommendRoute);
// app.use('/trending', trendingRoute);
// app.use('/category', categoryRoute);
// app.use('order', orderRoute);



app.listen('3000', () => console.log('Server is running'));