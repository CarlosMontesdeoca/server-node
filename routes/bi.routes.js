const express = require("express");
const Model = require("../models/quoter.model");
const router = express.Router();


router.get("/cotizaciones/:year", async (req, res) => {
    const startDate = new Date(req.params.year, 0, 1);
    const endDate = new Date(req.params.year, 11, 31, 23, 59, 59);
    try {
        const data = await Model.find({
          $and: [
            {
              $or: [
                { updatedAt: { $gte: startDate, $lte: endDate } }
              ],
            },
          ],
        }).sort({ updatedAt: -1 });      
    
      res.json(data);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
  
})

router.get("/servicios/:year", async (req, res) => {
  const startDate = new Date(req.params.year, 0, 1);
  const endDate = new Date(req.params.year, 11, 31, 23, 59, 59);
  try {
    const data = await Model.find({
      $and: [
        {
          $or: [
            { updatedAt: { $gte: startDate, $lte: endDate } },
            { state: 'A' },
          ],
        },
      ],
    }).sort({ updatedAt: -1 });
  let extractedServices = []
  data.map(record => record.services.forEach(dt => {
    dt.N_offert = record.N_offert;
    dt.advisor = record.advisor;
    dt.disc = record.disc;
    dt.createdAt = record.createdAt;
    dt.updatedAt = record.updatedAt;
    
    extractedServices = extractedServices.concat(dt);
  }))
  

  res.json(extractedServices);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
})

module.exports = router;
