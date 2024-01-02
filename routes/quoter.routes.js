const express = require("express");
const Model = require("../models/quoter.model");
const router = express.Router();

// const today = moment().startOf('day')
const year = new Date().getFullYear();

const createN_offert = (user, loc, count) => {
  const offert = `${user}-${loc + year}-${(count + 1)
    .toString()
    .padStart(3, "0")}`;
  return offert;
};
//Metodo para crear una nueva cotizacion
router.post("/", async (req, res) => {
  const count = await Model.find({
    advisor: req.body.advisor,
    createdAt: {
      $gte: new Date(year, 1, 1),
      $lte: new Date(year, 12, 1),
    },
  });
  const cod = createN_offert(req.body.cod, req.body.loc, count.length);
  const data = new Model(req.body);
  data.N_offert = cod;
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Metodo para encontrar las cotizaciones de un asesor por año.
router.get("/advisor/:advisor/:year", async (req, res) => {
  const adv = req.params.advisor.replace("_", " ");
  try {
    const startDate = new Date(req.params.year, 0, 1); // Inicio del año
    const endDate = new Date(req.params.year, 11, 31, 23, 59, 59); // Fin del año

    console.log("Fecha de inicio:", startDate);
    console.log("Fecha de fin:", endDate);

    const data = await Model.find({
      advisor: adv,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    }).sort({ createdAt: -1 });

    console.log("Cotizaciones encontradas:", data.length);

    res.json(data);
  } catch (error) {
    console.error("Error al buscar cotizaciones:", error.message);
    res.status(500).json({ message: error.message });
  }
});

//Metodo para encontrar las cotizaciones para aprovar.
router.get("/all/:year", async (req, res) => {
  try {
    const data = await Model.find({
      createdAt: {
          $gte: new Date(req.params.year, 1, 1),
          $lte: new Date(req.params.year, 12, 1)
      }
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
      N_offert: req.params.N_offert
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
  
      const result = await Model.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (!result) {
        return res.status(404).json({ message: 'Elemento no encontrado' });
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

router.put("/active/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = {
      state: 'C'
    };

    const result = await Model.findByIdAndUpdate(id, updatedData, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Elemento no encontrado' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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

// router.get('/:quoter', async (req, res) => {
//     try {
//         const data = await Model.find({
//             N_offert: new RegExp(req.params.quoter, 'i')
//           });
//         res.json(data)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

module.exports = router;
