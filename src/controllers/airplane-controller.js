const { StatusCode } = require('http-status-codes')
const { AirplaneService } = require('../services');

/*
Request is going to be look like 
POST {
    'modelNumber': 'Airbus380',
    'Capacity': '250'
}

*/

async function createAirplane(request, response){

    try{
       // console.log("request>>",request);
        const airplane = await AirplaneService.createAirplane({
            modelNumber : request.body.modelNumber,
            capacity: request.body.capacity
        })
        return response
        .status(201)
        .json({
            'success' : 'true',
            'msg' : 'Successfully created a airplane',
            'data' : airplane,
            error: {}
        })

    }catch(error){
        console.log("error>>",error);
        return response
        .status(500)
        .json({
            'success': 'false',
            'msg' : 'false',
            data : {},
            'error' : error
            
        })

    }
}

module.exports = {
    createAirplane
}