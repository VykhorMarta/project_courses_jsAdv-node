const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Item = require("../models/item")

router.get("/", (req, res) => {
    Item.find({}).then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(500).json({ "error": error})
    });
});

router.post('/', (req, res) => {
    const item = new Item({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageSrc: req.body.imageSrc
    }, {versionKey: false});
    console.log(req.body);
    item.save().then(data => {
        res.status(200).json(data);
    }).catch(err =>{
        res.status(500).json({"error": err});
    });
});

router.get("/:itemId", (req,res) => {
    const id = req.params.itemId;

    Item.findOne({"_id": id}).then(data =>{
        res.status(200).json(data);
    }).catch(error =>{
        res.status(500).json({"error": error})
    });
});

module.exports = router;