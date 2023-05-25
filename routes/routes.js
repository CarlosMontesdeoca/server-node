const express = require('express');
const Model = require('../models/model');
const router = express.Router();

const year = new Date().getFullYear();
//Post Method
router.post('/', async (req, res) => {
    const data = new Model(req.body)
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/quoters/advisor/:advisor', async (req, res) => {
    try {
        // res.send(req.params)
        const data = await Model.find({advisor: req.params.advisor});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/quoters/count/:advisor', async (req, res) => {
    // try {
        res.send(year)
    //     const data = await Model.find();
    //     res.json(data)
    // }
    // catch (error) {
    //     res.status(500).json({ message: error.message })
    // }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;