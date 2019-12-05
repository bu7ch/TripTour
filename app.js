const express = require('express')
const volleyball = require('volleyball')
const app = express()

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

// MIDDLEWARE
if(process.env.NODE_ENV ==='development'){
  app.use(volleyball)
}
 app.use(express.json())
app.use((req, res, next) => {
  console.log("Coucou c'est le middleware 🐳");
  next()
})
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next()
})


// routes
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app