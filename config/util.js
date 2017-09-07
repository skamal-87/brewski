/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

module.exports = {};

const sendErrorResponse = (error, response) => {
  response.status(401);
  response.json({
    "status": 401,
    "message": "Error",
    "error": error
  });
};

const sendSuccessResponse = (data, response) => {
  response.status(200);
  response.json({
    "status": 200,
    "message": "Success",
    "data": data
  });
};

module.exports.sendErrorResponse = sendErrorResponse;
module.exports.sendSuccessResponse = sendSuccessResponse;