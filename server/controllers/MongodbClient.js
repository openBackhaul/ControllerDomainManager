
var MongodbClient = require('../service/MongodbClientService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getMongodbClientAuthSource = function getMongodbClientAuthSource (req, res, next, uuid) {
let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientAuthSource(req.url)
     .then(function (response) {
         responseBuilder.buildResponse(res, responseCode, response);
       })
       .catch(function (response) {
         let sentResp = responseBuilder.buildResponse(res, undefined, response);
         responseCode = sentResp.code;
       });
     oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
   };

module.exports.getMongodbClientCollectionName = function getMongodbClientCollectionName (req, res, next, uuid) {
 let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientCollectionName(req.url)
      .then(function (response) {
          responseBuilder.buildResponse(res, responseCode, response);
        })
        .catch(function (response) {
          let sentResp = responseBuilder.buildResponse(res, undefined, response);
          responseCode = sentResp.code;
        });
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    };

module.exports.getMongodbClientDatabaseName = function getMongodbClientDatabaseName (req, res, next, uuid) {
 let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientDatabaseName(req.url)
    .then(function (response) {
        responseBuilder.buildResponse(res, responseCode, response);
      })
      .catch(function (response) {
        let sentResp = responseBuilder.buildResponse(res, undefined, response);
        responseCode = sentResp.code;
      });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
  };

module.exports.getMongodbClientLifeCycleState = function getMongodbClientLifeCycleState (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientLifeCycleState(req.url)
      .then(function (response) {
          responseBuilder.buildResponse(res, responseCode, response);
        })
        .catch(function (response) {
          let sentResp = responseBuilder.buildResponse(res, undefined, response);
          responseCode = sentResp.code;
        });
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    };

module.exports.getMongodbClientOperationalState = function getMongodbClientOperationalState (req, res, next, uuid) {
 let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientOperationalState(req.url)
     .then(function (response) {
         responseBuilder.buildResponse(res, responseCode, response);
       })
       .catch(function (response) {
         let sentResp = responseBuilder.buildResponse(res, undefined, response);
         responseCode = sentResp.code;
       });
     oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
   };

module.exports.getMongodbClientPassword = function getMongodbClientPassword (req, res, next, uuid) {
 let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientPassword(req.url)
     .then(function (response) {
         responseBuilder.buildResponse(res, responseCode, response);
       })
       .catch(function (response) {
         let sentResp = responseBuilder.buildResponse(res, undefined, response);
         responseCode = sentResp.code;
       });
     oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
   };

module.exports.getMongodbClientUserName = function getMongodbClientUserName (req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  MongodbClient.getMongodbClientUserName(req.url)
      .then(function (response) {
          responseBuilder.buildResponse(res, responseCode, response);
        })
        .catch(function (response) {
          let sentResp = responseBuilder.buildResponse(res, undefined, response);
          responseCode = sentResp.code;
        });
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    };

module.exports.putMongodbClientAuthSource = function putMongodbClientAuthSource (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  MongodbClient.putMongodbClientAuthSource(req.url,body)
      .then(function (response) {
          responseBuilder.buildResponse(res, responseCode, response);
        })
        .catch(function (response) {
          let sentResp = responseBuilder.buildResponse(res, undefined, response);
          responseCode = sentResp.code;
        });
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    };

module.exports.putMongodbClientCollectionName = function putMongodbClientCollectionName (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  MongodbClient.putMongodbClientCollectionName(req.url,body)
    .then(function (response) {
        responseBuilder.buildResponse(res, responseCode, response);
      })
      .catch(function (response) {
        let sentResp = responseBuilder.buildResponse(res, undefined, response);
        responseCode = sentResp.code;
      });
    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
  };

module.exports.putMongodbClientDatabaseName = function putMongodbClientDatabaseName (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  MongodbClient.putMongodbClientDatabaseName(req.url,body)
      .then(function (response) {
          responseBuilder.buildResponse(res, responseCode, response);
        })
        .catch(function (response) {
          let sentResp = responseBuilder.buildResponse(res, undefined, response);
          responseCode = sentResp.code;
        });
      oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
    };

module.exports.putMongodbClientPassword = function putMongodbClientPassword (req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  MongodbClient.putMongodbClientPassword(req.url,body)
     .then(function (response) {
         responseBuilder.buildResponse(res, responseCode, response);
       })
       .catch(function (response) {
         let sentResp = responseBuilder.buildResponse(res, undefined, response);
         responseCode = sentResp.code;
       });
     oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
   };

module.exports.putMongodbClientUserName = function putMongodbClientUserName (req, res, next, body, uuid) {
 let responseCode = responseCodeEnum.code.NO_CONTENT;
  MongodbClient.putMongodbClientUserName(req.url,body)
     .then(function (response) {
         responseBuilder.buildResponse(res, responseCode, response);
       })
       .catch(function (response) {
         let sentResp = responseBuilder.buildResponse(res, undefined, response);
         responseCode = sentResp.code;
       });
     oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
   };
