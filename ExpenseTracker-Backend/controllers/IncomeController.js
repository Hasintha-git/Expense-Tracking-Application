const Income = require('../models/Income')


const IncomeRegister = (req, res, next) => {
    let income = new Income({
        date: req.body.date,
        price: req.body.price,
    })

    income.save()
    .then(income => {
        res.json({
            status:'200',
            message: 'Income Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            status:400,
            message: 'An Error!'
        })
    })
}

const getIncomeDetails=async(req,res,next)=>{
    try{
        const data=await Income.find()
        res.json(data)
    }catch(err){
        res.send('Error'+err)
    }
}

const getLastDate=async(req,res,next)=>{
    try{
        Income.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, post) {
            res.json(post)
          }); 

    }catch(err){
        res.send('Error'+err)
    }
}


module.exports = {
    IncomeRegister,getIncomeDetails,getLastDate
}