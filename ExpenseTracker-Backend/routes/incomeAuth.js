const express = require('express')
const router =express.Router()

const IncomeController = require('../controllers/IncomeController')
console.log("auth");
router.post('/Income',IncomeController.IncomeRegister)
router.get('/getIncome',IncomeController.getIncomeDetails)
router.get('/getLast',IncomeController.getLastDate)
module.exports =router