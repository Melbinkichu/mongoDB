const express = require('express');
const studentModel = require('../Model/studentModel');
const router = express.Router();
const mongodb = require("mongodb")
router.use(express.json());

router.get('/',async(req,res)=>{
    try {
        const data = await studentModel.find()
        res.send(data);
    } catch (error) {
        console.log(error)
    }
})

// Route to add data
router.post('/add',async(req,res) =>{
    try {
         var item = req.body;
         await studentModel(item).save()
         res.send("data added");
    } catch (error) {
         console.log(error)
    }
})
router.delete('/add/:id',async(req,res)=>{
    try {
        let id = req.params.id
        await studentModel.deleteOne({_id:new mongodb.ObjectId(id)})
        res.send("item delected")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.put('/edit/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndUpdate(id,item);
        res.send("data updated") 
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;