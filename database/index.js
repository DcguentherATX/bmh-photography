const mongoose = require('mongoose');
const photos = require('./photos.json');

mongoose.connect(`mongodb://localhost/Photos`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const photoSchema = mongoose.Schema({
    sku: Number,
    title: String,
    image: String,
    prices: [Number],
    rating: Number,
    category: String,
    keywords: [String]
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

// returns all images

const getImages = (obj, cb) => {
    // console.log('db obj: ', obj);
    Photos.find(obj, (err, images) => {
        if (err) {
            console.log('error reading db', err)
        }
        console.log('images found');
        cb(null, images);
    })
}

// returns images based on dropdown category

const searchImages = (obj, cb) => {
    // console.log('search obj: ', obj);
    let target = obj.searchTerm;

    Photos.find({ category: target }, (err, images) => {
        if (err) {
            console.log('search term error db', err)
        }
        console.log('images found');
        cb(null, images);
    })
}

// uncomment below to add photos.json to database

// seedDatabase(photos);

module.exports = { getImages, searchImages };