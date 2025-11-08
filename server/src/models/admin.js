// backend/models/Admin.js
import mongoose from 'mongoose';
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// // Hash password before saving to database
// adminSchema.pre('save', async function(next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10); // Hash the password
//   }
//   next();
// });
 const Admin = mongoose.model('Admin', adminSchema);
 exports  default {Admin};
