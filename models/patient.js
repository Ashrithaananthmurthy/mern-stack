const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PatientSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  contact_no:{
      type:Number,
      required:true
  },
  blood_group: {
      type:String,
      required:true
  },
  address1:{
      type:String,
      required:true
  },
  address2:{
      type:String,
      required:true
  },
  city:{
      type:String,
      required:true
  },
  state:{
      type:String,
      required:true
  },
  country:{
      type:String,
      required:true
  },
  pin_code:{
      type:Number,
      required:true
  },
  hospital_details:{
      type:String,
      required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Patient = mongoose.model('patients', PatientSchema)
