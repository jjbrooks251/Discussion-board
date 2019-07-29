const express = require("express");
const Validator = require("validator");
const router = express.Router();
const bcrypt = require('bcryptjs');

const item = require("../models/itemModel.js");
const validateLoginInput = require("../validation/itemValid.js");
const emailhash = require("../validation/hash.js");

router.get("/test", (req, res) => {

  res.json({
    message: "test"
  });
});

router.get("/getAllItems", (req, res) => {
  const errors = {};
  item.find({}, '-__v -_id')
    .then(items => {
      if (!items) {
        errors.noItems = "There are no items";
        res.status(404).json(errors);
      }
      res.json(items);
    })
    .catch(err => res.status(404).json({ noItems: "There are no items" }));
});

router.post('/addItem', (req, res) => {

  let vu = validateLoginInput(req.body);

  if (vu.isValid) {

    const newItem = new item({
      username: req.body.username,
      email: req.body.email,
      //email: emailHash(req.body.email),
      message: req.body.message
    });

     bcrypt.hash(req.body.email, 15)
      .then((hash) => {
        newItem.email = hash
        newItem.save()
        res.status(200).send("Added New Item")
      })
      .catch(err => res.status(555).json({ "Fault": `${err}` }))

     //newItem.save().then(() => res.send('complete'));
    } else {
      res.send(vu);
    }
  } 
);

router.put('/upItemName', (req, res) => {

  var search = { username: req.body.searchname };
  var newName = { username: req.body.username };

  item.findOneAndUpdate(search, newName)
    .then(items => {
      if (!items) {
        errors.noItems = "There are no items";
        res.status(404).json(errors);
      }
      res.send('updated');
    })
    .catch(err => res.status(404).json({ noItems: "There are no items belonging to this username to update" }));

});

router.delete('/delItemName', (req, res) => {
  var search = { username: req.body.username };
  item.findOneAndDelete(search)
    .then(items => {
      if (!items) {
        errors.noItems = "There are no items";
        res.status(404).json(errors);
      }
      res.send('Removed');
    })
    .catch(err => res.status(404).json({ noItems: "There are no items to delete with this username" }));
});

module.exports = router;