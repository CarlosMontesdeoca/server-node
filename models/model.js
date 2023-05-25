const mongoose = require('mongoose');

const QuoterSchema = new mongoose.Schema({
    N_offert: { type: String }, 
    advisor: { type: String }, 
    ruc: { type: String }, 
    client: { type: String },
    id_plant: {type: Number},
    plant: { type: String }, 
    address: { type: String }, 
    contact: { type: String },
    email: { type: String }, 
    phone: { type: String },
    bals: { type: Array },
    services: { type: Array },
    products: { type: Array },
    state: {type: String, default: 'A'}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('quoter', QuoterSchema);