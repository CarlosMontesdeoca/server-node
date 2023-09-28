const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    __motor: { type: String, required: true }, 
    __trazabilidad: { type: String, required: true },
    __comentario: { type: String, required: true }, 
    __fecha_de_cracion: { type: String, required: true },  
    Tipo: { type: String, required: true },
    Clase: { type: String },
    Nombre_certificado: { type: String, unique: true, required: true }, 
    Fecha_calibracion: { type: String, required: true },
    Proxima_expiracion: { type: Number, required: true },
    Proxima_calibracion: { type: String, required: true },
    Idebtificacion: { type: String },
    Ubicacion: {
        UIO: {type: Boolean},
        GYE: {type: Boolean},
        MNT: {type: Boolean},
        NAC: {type: Boolean}
    },
    Marca: { type: String },
    Modelo: { type: String },
    Juego: { type:Object }
});

module.exports = mongoose.model('certificate', CertificateSchema);