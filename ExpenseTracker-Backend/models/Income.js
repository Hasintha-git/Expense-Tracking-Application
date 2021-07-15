const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema({
    date: {
        type:Date
    },
    price: {
        type:Number
    }
},{timestamps:true})

const Income = mongoose.model('Income',incomeSchema)
module.exports=Income