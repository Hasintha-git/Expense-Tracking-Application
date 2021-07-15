const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const AuthRoute = require('./routes/auth')
const IncomeAuth = require('./routes/incomeAuth')
const ExpenseAuth = require('./routes/expenseAuth')

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection

db.on('error',(err)=>{
    console.log(err);
})
db.once('open',()=>{
    console.log('database connection Estabilished');
})

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads',express.static('upload'))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

app.use('/api', AuthRoute)
app.use('/api', IncomeAuth)
app.use('/api', ExpenseAuth)