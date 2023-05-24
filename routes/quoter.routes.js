const express = require("express");
const router = express.Router();

const Quoter = require("../models/quoter.model");
// const { verifyToken, isSistem } = require('../middlewares/authjwt');  data.client === req.params.id

router.get("/", (req, res) => {
  Quoter.find().then((allQuoters) => res.json(allQuoters));
});

router.post("/", async (req, res) => {

    const { advisor } = req.body
    let newData = new Quoter ({
        advisor
    })

    newData.save().then(newData => {
        res.send(newData)
    }). catch( error => {
        console.log(error)
    })

    // res.json({ status: "planta ingresada" });
});

// router.get('/:id', async (req, res) => {
//     const Plants = await Plant.find();
//     let dataPlant = Plants.filter(data => data.client == req.params.id)
//         // console.log(data.client)
//         console.log(dataPlant)
//     res.json(dataPlant);
// })

// router.put('/:id', async (req, res) => {

//     const { city, cost, address, typ, plant, edited } = req.body;
//     const newPlant  = { city, cost, address, typ, plant, edited };
//     console.log(req.params.id);

//     await Plant.findByIdAndUpdate(req.params.id, newPlant);

//     res.json({ status: 'planta actualizada'});

// })

// router.put('/:id/contacts', async (req, res) => {
//     try {
//         const { contacts } = req.body;
//         const newClient  = { contacts };
//         console.log(req.params.id);

//         await Plant.findByIdAndUpdate(req.params.id, newClient);

//         res.json({ status: 'contacto agregado'});
//     } catch (error) {
//         return error
//     }
// })

// router.delete('/:id', async (req, res) => {

//     await Plant.findByIdAndDelete(req.params.id);
//     res.json({ status: 'Cliente eliminado' })

// })

module.exports = router;
