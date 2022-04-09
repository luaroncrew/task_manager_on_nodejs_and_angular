// this file handles connection logic for mongoDB database

const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useNewUrlParser: true})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((e) => {
    console.log('error occured while connecting to MongoDB', e)
});

// to prevent warnings
//
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};

