var express = require('express');

// router is similar to an app (express()) but helps with modularity?
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// Connects with mongo and then calls the function that receives as parameter with the db
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/products', (err, db) => {
        if(err) {
            return console.log(err);
        }
        closure(db);
    });
}

let response = {
    status: 200,
    message: null,
    data: []
}

var sendError = (err, res) => {
    response.status = 501,
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);
}

router.get('/products', (req, res) => {
    connection((db) => {
        db.db('test').collection('products').find({"ID_ITEM": 812}).toArray().then((products) => {
            response.data = products;
            res.json(response);
        })
    });
})

module.exports = router;