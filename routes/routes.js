const express = require('express');
const Model = require('../models/model');
const router = express.Router();
const moment = require('moment')

const today = moment().startOf('day')
const year = new Date().getFullYear();

const createN_offert = (user, loc, count) => {
    let aux = ''
    user.split(' ').forEach(val => 
        aux += val[0]    
    )
    const offert = `${aux}-${loc+year}-${count+1}`
    return offert
}
//Post Method
router.post('/', async (req, res) => {
    
    const count = await Model.find({
        advisor: req.body.advisor,
        createdAt: {
            $gte: new Date(year, 1, 1),
            $lte: new Date(year, 12, 1)
        }
    });
    const cod = createN_offert(req.body.advisor, req.body.loc, count.length)
    const data = new Model(req.body)
    data.N_offert = cod
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/advisor/:advisor/:year', async (req, res) => {
    try {
        const data = await Model.find({
            advisor: req.params.advisor,
            createdAt: {
                $gte: new Date(req.params.year, 1, 1),
                $lte: new Date(req.params.year, 12, 1)
            }
          });
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// router.get('/quoters/count/:advisor', async (req, res) => {
//     // try {
//         res.send(year)
//     //     const data = await Model.find();
//     //     res.json(data)
//     // }
//     // catch (error) {
//     //     res.status(500).json({ message: error.message })
//     // }
// })

//Get by ID Method
router.get('/:id', async (req, res) => {
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