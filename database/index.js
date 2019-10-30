const mongoose = require('mongoose');
const photos = require('./photos.json');

mongoose.connect(`mongodb://localhost/Photos`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const photoSchema = mongoose.Schema({
    sku: Number,
    title: String,
    image: String,
    price: Number,
    rating: Number,
    category: [String]
});

let Photos = mongoose.model('Photos', photoSchema);

const seedDatabase = (data) => {
    Photos.insertMany(data, (err) => {
        if (err) {
            console.log('insertion error: ', err);
        } else {
            console.log('data inserted properly to database');
        }
    })
}

const getImages = (obj, cb) => {
    console.log('db obj: ', obj);
    Photos.find(obj, (err, images) => {
        if (err) {
            console.log('error reading db', err)
        }
        console.log('images found');
        cb(null, images);
    })
}

// seedDatabase(photos);

module.exports = { getImages };