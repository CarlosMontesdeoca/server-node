const mongoose = require('mongoose');

const QuoterSchema = new mongoose.Schema({
    N_offert: { type: String, unique: true, required: true }, 
    advisor: { type: String, required: true }, 
    ruc: { type: String, required: true }, 
    client: { type: String, required: true },
    id_plant: { type: Number, required: true },
    plant: { type: String, required: true }, 
    address: { type: String, required: true },
    id_contact: { type: Number, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true }, 
    phone: { type: String, required: true },
    bals: { type: Array },
    services: { type: Array },
    products: { type: Array },
    comments: { type: Array },
    pay: { type: String },
    validity: { type: Number, default: 15 },
    state: {type: String, default: 'A' }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('quoter', QuoterSchema);