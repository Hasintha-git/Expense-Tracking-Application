const express = require('express')
const router =express.Router()

const expenseController = require('../controllers/ExpenseController')
console.log("auth");
router.post('/Expense',expenseController.ExpenseRegister)
router.get('/getExpense',expenseController.getExpenseDetails)

module.exports =router