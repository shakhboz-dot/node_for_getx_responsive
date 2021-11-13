const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/clothes')
    .then(_ => console.log('Database is running'))
    .catch(err => console.log(`Error : ${err}`));