'use strict';

var utils = require('../utils/writer.js');
var IndividualManagement = require('../service/IndividualManagementService');

module.exports.v1ListErrorCodes = function v1ListErrorCodes (req, res, next) {
  IndividualManagement.v1ListErrorCodes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListFunctions = function v1ListFunctions (req, res, next) {
  IndividualManagement.v1ListFunctions()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListPulsers = function v1ListPulsers (req, res, next) {
  IndividualManagement.v1ListPulsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListValidationSequences = function v1ListValidationSequences (req, res, next) {
  IndividualManagement.v1ListValidationSequences()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfErrorCode = function v1ProvideConfigOfErrorCode (req, res, next, body) {
  IndividualManagement.v1ProvideConfigOfErrorCode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfFunction = function v1ProvideConfigOfFunction (req, res, next, body) {
  IndividualManagement.v1ProvideConfigOfFunction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfPulser = function v1ProvideConfigOfPulser (req, res, next, body) {
  IndividualManagement.v1ProvideConfigOfPulser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfValidationSequence = function v1ProvideConfigOfValidationSequence (req, res, next, body) {
  IndividualManagement.v1ProvideConfigOfValidationSequence(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideDomainControllerDump = function v1ProvideDomainControllerDump (req, res, next) {
  IndividualManagement.v1ProvideDomainControllerDump()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateErrorCode = function v1UpdateErrorCode (req, res, next, body) {
  IndividualManagement.v1UpdateErrorCode(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateFunction = function v1UpdateFunction (req, res, next, body) {
  IndividualManagement.v1UpdateFunction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdatePulser = function v1UpdatePulser (req, res, next, body) {
  IndividualManagement.v1UpdatePulser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateValidationSequence = function v1UpdateValidationSequence (req, res, next, body) {
  IndividualManagement.v1UpdateValidationSequence(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
