const express = require("express");
const Model = require("../models/certificate.model");
const router = express.Router();

const year = new Date().getFullYear();

//Metodo para encontrar las cotizaciones de un asesor por año.
router.get("/", async (req, res) => {
  try {
    const mass = await Model.find({
        Tipo: 'Masa'
    });
    const temp = await Model.find({
        Tipo: 'Temperatura'
    });
    res.json([mass, temp]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Metodo para crear una nueva cotizacion
router.post("/", async (req, res) => {
  const data = new Model(req.body);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Metodo para encontrar las cotizaciones para aprovar.
router.get("/:year", async (req, res) => {
  try {
    const data = await Model.find({
      createdAt: {
        $gte: new Date(req.params.year, 1, 1),
        $lte: new Date(req.params.year, 12, 1),
      },
    }).sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Metodo para obtener una cotizacion por individual
router.get("/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/find/:N_offert", async (req, res) => {
  try {
    const data = await Model.find({
      N_offert: req.params.N_offert,
    });
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await Model.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({ message: "Elemento no encontrado" });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  //   try {
  //     const id = req.params.id;
  //     // const updatedData = req.body;
  //     // const options = { new: true };

  //     const data = await Model.findByIdAndUpdate(id);

  //     res.json(data);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
});

//Delete by ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
