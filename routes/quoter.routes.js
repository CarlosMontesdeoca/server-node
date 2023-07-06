// const express = require('express');
// const Quoter = require("../models/quoter.model");

// const router = express.Router()

// //Post Method
// router.post('/post', (req, res) => {
//     const data = new Quoter({
//         N_offert: req.body.N_offert,
//         advisor: req.body.advisor,
//         ruc: req.body.ruc,
//         client: req.body.client,
//         plant: req.body.plant,
//         address: req.body.address,
//         contact: req.body.contact,
//         email: req.body.email,
//         phone: req.body.phone,
//         services: req.body.services,
//         products: req.body.products,
//         state: req.body.state,
//     })
    
//     try {
//         const dataToSave = data.save();
//         res.status(200).json(dataToSave)
//     }
//     catch (error) {
//         res.status(400).json({message: error.message})
//     }
//     // res.send('Post API')
// })

// //Get all Method
// router.get('/getAll', (req, res) => {
//     res.send('Get All API')
// })

// //Get by ID Method
// router.get('/getOne/:id', (req, res) => {
//     res.send(req.params.id)
// })

// //Update by ID Method
// router.put('/update/:id', (req, res) => {
//     res.send('Update by ID API')
// })

// //Delete by ID Method
// router.delete('/delete/:id', (req, res) => {
//     res.send('Delete by ID API')
// })

// module.exports = router;