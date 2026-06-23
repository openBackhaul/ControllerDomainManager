'use strict';


/**
 * Provides list of defined ErrorCodes
 *
 * returns inline_response_200_42
 **/
exports.v1ListErrorCodes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "list-of-error-codes" : [ 630, 631, 632, 633, 640, 641, 642, 643, 650, 651, 652, 653, 654 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides list of identifiers of internal Functions
 *
 * returns inline_response_200_36
 **/
exports.v1ListFunctions = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "list-of-functions" : [ "v1ProvideDomainControllerDump", "v1ListFunctions", "v1UpdateFunction", "v1ListValidationSequences", "v1UpdateValidationSequence", "v1ListPulsers", "v1UpdatePulser", "v1ListErrorCodes", "v1UpdateErrorCode", "p1MeasurementOrchestrator" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides list of Functions triggered by Pulser
 *
 * returns inline_response_200_40
 **/
exports.v1ListPulsers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "list-of-target-functions" : [ "p1MeasurementOrchestrator", "p1MonitoringOrchestrator", "p1ImplementationOrchestrator" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides list of operationIds of InterpretationFunctions
 *
 * returns inline_response_200_38
 **/
exports.v1ListValidationSequences = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "list-of-trigger-functions" : [ "v1RegardApplication", "v1DisregardApplication", "v1ListApplications", "v1ProvideConfigOfApplication", "v1ProvideStatusOfApplication" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides specified ErrorCode and associated ImplementationFunction
 *
 * body V1_provideconfigofcode_body 
 * returns inline_response_200_43
 **/
exports.v1ProvideConfigOfErrorCode = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "error-code" : 633,
  "description" : "ManagementDomainInterface configuration mismatch",
  "implementation-function" : "p1ReconstructManagementDomainInterface"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides parameter set of the specified internal Function
 *
 * body V1_provideconfigoffunction_body 
 * returns inline_response_200_37
 **/
exports.v1ProvideConfigOfFunction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function-name" : "function-name",
  "parameter" : [ {
    "parameter-definition" : "parameter-definition",
    "parameter-name" : "parameter-name",
    "parameter-value" : "parameter-value"
  }, {
    "parameter-definition" : "parameter-definition",
    "parameter-name" : "parameter-name",
    "parameter-value" : "parameter-value"
  } ],
  "function-description" : "function-description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides configuration of specified Pulser
 *
 * body V1_provideconfigofpulser_body 
 * returns inline_response_200_41
 **/
exports.v1ProvideConfigOfPulser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "target-function" : "p1MeasurementOrchestrator",
  "is-activated" : false,
  "period-length" : 5000,
  "starting-time" : "1999-12-31T23:59:59+01:00",
  "ending-time" : "2059-06-30T23:59:59+02:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides sequence of ValidationFunctions triggered by specified InterpretationFunction
 *
 * body V1_provideconfigofvalidationsequence_body 
 * returns inline_response_200_39
 **/
exports.v1ProvideConfigOfValidationSequence = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "trigger-function" : "v1RegardApplication",
  "sequence" : [ {
    "step-number" : 0,
    "validation-function" : "p1EnsureUniqueElementNames"
  }, {
    "step-number" : 1,
    "validation-function" : "p1EnsureExistenceOfTemplates"
  }, {
    "step-number" : 2,
    "validation-function" : "p1EnsureProperCategorization"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides entire internal data tree (DomainController)
 *
 * returns inline_response_200_35
 **/
exports.v1ProvideDomainControllerDump = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function" : [ { }, { } ],
  "pulser" : [ { }, { } ],
  "error-code" : [ { }, { } ],
  "validation-sequence" : [ { }, { } ],
  "alarm-pac" : {
    "current-alarms" : {
      "affected-management-domain" : [ { }, { } ]
    }
  },
  "network-control-domain" : [ {
    "control-construct" : [ { }, { } ],
    "profile" : [ { }, { } ],
    "link" : [ { }, { } ],
    "storage" : "candidate",
    "forwarding-domain" : [ { }, { } ]
  }, {
    "control-construct" : [ { }, { } ],
    "profile" : [ { }, { } ],
    "link" : [ { }, { } ],
    "storage" : "candidate",
    "forwarding-domain" : [ { }, { } ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates configuration of an ErrorCode
 *
 * body V1_updateerrorcode_body 
 * no response value expected for this operation
 **/
exports.v1UpdateErrorCode = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates parameter set of specified internal Function
 *
 * body V1_updatefunction_body 
 * no response value expected for this operation
 **/
exports.v1UpdateFunction = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates configuration of specified Pulser
 *
 * body V1_updatepulser_body 
 * no response value expected for this operation
 **/
exports.v1UpdatePulser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates sequence of ValidationFunctions triggered by specified InterpretationFunction
 *
 * body V1_updatevalidationsequence_body 
 * no response value expected for this operation
 **/
exports.v1UpdateValidationSequence = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

