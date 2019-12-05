const express = require('express')
const router = express.Router()
const tourController = require('./../controllers/tourController')


router.route('/')
  .get(tourController.getAllTours)
  // TODO: add next route for ultimate RESTFul API

  module.exports = router;


  