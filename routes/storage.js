const express = require("express");

const router = express.Router();

const newArr = new Array();

newArr[0] = "josh";
newArr[1] = "jack";

console.log(newArr[1]);

router.get("/test", (req, res) => {

    res.send("test");
});

router.get("/getAllItems", (req, res) => {
    res.send(`${newArr}`);
});

router.post('/addItem', (req,res) => {
	
	for (i in req.body.item){
        newArr[i] = req.body.item[i]
	}
	
	res.send(`All items are:  ${newArr}`);
});

router.put('/upItem1', (req,res) => {

        newArr[0] = req.body.item

	res.send(`The new list of items are: ${newArr}`);
});

router.delete('/delItem', (req,res) => {
	
	var item = req.body.deleteItem;      
	delete newArr[item];
	res.send(`The remaining items are:  ${newArr}`);
});


module.exports = router;