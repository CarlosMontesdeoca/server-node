const mongoose = require('mongoose');

const QuoterSchema = new mongoose.Schema({
    N_offert: { type: String, unique: true, required: true }, 
    reference: { type: String, required: true },
    advisor: { type: String, required: true }, 
    phone_adv: { type: String, required: true },  
    email_adv: { type: String, required: true },
    ruc: { type: String, required: true }, 
    client: { type: String, required: true },
    id_plant: { type: Number, required: true },
    plant: { type: String, required: true }, 
    address: { type: String, required: true },
    id_contact: { type: Number, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true }, 
    phone: { type: String, required: true },
    balances: { type: Array },
    services: { type: Array },
    products: { type: Array },
    comments: { type: Array },
    observations: { type: Array },
    order: { type: String },
    pay: { type: String },
    validity: { type: Number, default: 15 },
    state: {type: String, default: 'C' },
    version: {type: Number, default: 1 }
}, {
    timestamps: true
});

module.exports = mongoose.model('quoter', QuoterSchema);