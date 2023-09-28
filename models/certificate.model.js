const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    __motor: { type: Number, default: 11 }, 
    __trazabilidad: { type: String, default: null },
    __comentario: { type: String, default: null }, 
    __fecha_de_creacion: { type: String, required: true },  
    Tipo: { type: String, required: true },
    Clase: { type: String },
    Nombre_certificado: { type: String, unique: true, required: true }, 
    Fecha_calibracion: { type: String, required: true },
    Proxima_expiracion: { type: String, required: true },
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
    juego: { type: Object },
    temp: { type: Object },
    hum: { type: Object }
}, {versionKey: false });

module.exports = mongoose.model('certificate', CertificateSchema);