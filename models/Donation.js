const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  item: String,
  photo: String,
  donatedby: String,
  status: String
}, { timestamps: true });

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
