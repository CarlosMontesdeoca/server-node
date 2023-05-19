const express = require('express');
const router = express.Router();

const Quoter = require('../models/quoter.model');
// const { verifyToken, isSistem } = require('../middlewares/authjwt');  data.client === req.params.id
 
router.get("/", (req, res) => {
    Quoter.find().then((allQuoters) => res.json(allQuoters));
});

// router.get('/:id', async (req, res) => {
//     const Plants = await Plant.find();
//     let dataPlant = Plants.filter(data => data.client == req.params.id)
//         // console.log(data.client)
//         console.log(dataPlant)
//     res.json(dataPlant);
// })

// router.post('/', async (req,res) => {

//     const { city, cost, address, typ, plant, phone, email, edited, contacts, client } = req.body;
//     // let aux = ''
//     // if ( req.body.email ) { aux = req.body.email.toLowerCase() }

//     const NewPlant = new Plant ({ city: city.toUpperCase(), cost, address: address.toUpperCase(), typ, plant, phone, email, edited, contacts, client: client.toUpperCase() })

//     if( client ){
//         const foundClient = await Client.findOne({name:  {$in: client.toUpperCase()}})
//         NewPlant.client = foundClient._id
//     } else {
//         console.log(false)
//     }
    
    
//     const savedClient = await NewPlant.save();
//     console.log(savedClient)

//     res.json({status: 'planta ingresada'});
// });

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