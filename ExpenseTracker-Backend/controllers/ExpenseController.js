const Expense = require('../models/Expense')


const ExpenseRegister = (req, res, next) => {
    let expense = new Expense({
        date: req.body.date,
        price: req.body.price,
        reason: req.body.reason,
        category: req.body.category,
    })

    expense.save()
    .then(expense => {
        res.json({
            status:'200',
            message: 'Expense Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            status:400,
            message: 'An Error!'
        })
    })
}
const getExpenseDetails=async(req,res,next)=>{
    try{
        const data=await Expense.find()
        res.json(data)
    }catch(err){
        res.send('Error'+err)
    }
}


module.exports = {
    ExpenseRegister,getExpenseDetails
}