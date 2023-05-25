const mongoose = require('mongoose');

const QuoterSchema = new mongoose.Schema({
    N_offert: { type: String }, 
    advisor: { type: String }, 
    ruc: { type: String }, 
    client: { type: String }, 
    plant: { type: String }, 
    address: { type: String }, 
    contact: { type: String },
    email: { type: String }, 
    phone: { type: String },
    services: { type: Array },
    products: { type: Array },
    state: {type: String}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('quoter', QuoterSchema);