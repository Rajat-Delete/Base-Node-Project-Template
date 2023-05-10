const express = require('express');

const router = express.Router();
const { AirplaneController } =require('../../controllers');


//this is technically reffering to /api/v1/airplanes which is a post request
router.post('/' , AirplaneController.createAirplane);


module.exports = router;