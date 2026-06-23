'use strict';

var utils = require('../utils/writer.js');
var IndividualServices = require('../service/IndividualServicesService');

module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CreateApplicationTemplate = function v1CreateApplicationTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1CreateApplicationTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CreateControllerTemplate = function v1CreateControllerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1CreateControllerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CreateLoadBalancerTemplate = function v1CreateLoadBalancerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1CreateLoadBalancerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CreateMountPointTemplate = function v1CreateMountPointTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1CreateMountPointTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DeleteApplicationTemplate = function v1DeleteApplicationTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DeleteApplicationTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DeleteControllerTemplate = function v1DeleteControllerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DeleteControllerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DeleteLoadBalancerTemplate = function v1DeleteLoadBalancerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DeleteLoadBalancerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DeleteMountPointTemplate = function v1DeleteMountPointTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DeleteMountPointTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DismantleControllerFromManagementDomain = function v1DismantleControllerFromManagementDomain (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DismantleControllerFromManagementDomain(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DismantleManagementDomain = function v1DismantleManagementDomain (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DismantleManagementDomain(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DismantleManagementDomainConnection = function v1DismantleManagementDomainConnection (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DismantleManagementDomainConnection(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DismantleManagementPlaneTransport = function v1DismantleManagementPlaneTransport (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DismantleManagementPlaneTransport(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DisregardApplication = function v1DisregardApplication (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DisregardApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DisregardController = function v1DisregardController (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DisregardController(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1DisregardLoadBalancer = function v1DisregardLoadBalancer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1DisregardLoadBalancer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1EstablishControllerInManagementDomain = function v1EstablishControllerInManagementDomain (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1EstablishControllerInManagementDomain(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1EstablishManagementDomain = function v1EstablishManagementDomain (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1EstablishManagementDomain(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1EstablishManagementDomainConnection = function v1EstablishManagementDomainConnection (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1EstablishManagementDomainConnection(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1EstablishManagementPlaneTransport = function v1EstablishManagementPlaneTransport (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1EstablishManagementPlaneTransport(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListAlarmsAtManagementPlaneTransport = function v1ListAlarmsAtManagementPlaneTransport (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListAlarmsAtManagementPlaneTransport(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListApplicationTemplates = function v1ListApplicationTemplates (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListApplicationTemplates(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListApplications = function v1ListApplications (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListApplications(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListControllerTemplates = function v1ListControllerTemplates (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListControllerTemplates(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListControllers = function v1ListControllers (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListControllers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListLoadBalancerTemplates = function v1ListLoadBalancerTemplates (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListLoadBalancerTemplates(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListLoadBalancers = function v1ListLoadBalancers (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListLoadBalancers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListManagementDomainInterfaces = function v1ListManagementDomainInterfaces (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListManagementDomainInterfaces(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListManagementDomains = function v1ListManagementDomains (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListManagementDomains(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListManagementPlaneTransports = function v1ListManagementPlaneTransports (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListManagementPlaneTransports(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ListMountPointTemplates = function v1ListMountPointTemplates (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ListMountPointTemplates(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1MediateNetconfClientUpdate = function v1MediateNetconfClientUpdate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1MediateNetconfClientUpdate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfApplication = function v1ProvideConfigOfApplication (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfApplicationTemplate = function v1ProvideConfigOfApplicationTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfApplicationTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfController = function v1ProvideConfigOfController (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfController(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfControllerTemplate = function v1ProvideConfigOfControllerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfControllerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfLoadBalancer = function v1ProvideConfigOfLoadBalancer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfLoadBalancer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfLoadBalancerTemplate = function v1ProvideConfigOfLoadBalancerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfLoadBalancerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfManagementDomain = function v1ProvideConfigOfManagementDomain (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfManagementDomain(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfManagementDomainConnection = function v1ProvideConfigOfManagementDomainConnection (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfManagementDomainConnection(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfManagementPlaneTransport = function v1ProvideConfigOfManagementPlaneTransport (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfManagementPlaneTransport(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideConfigOfMountPointTemplate = function v1ProvideConfigOfMountPointTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideConfigOfMountPointTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideStatusOfApplication = function v1ProvideStatusOfApplication (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideStatusOfApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideStatusOfController = function v1ProvideStatusOfController (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideStatusOfController(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideStatusOfLoadBalancer = function v1ProvideStatusOfLoadBalancer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideStatusOfLoadBalancer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideStatusOfManagementDomain = function v1ProvideStatusOfManagementDomain (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideStatusOfManagementDomain(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideStatusOfManagementDomainConnection = function v1ProvideStatusOfManagementDomainConnection (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideStatusOfManagementDomainConnection(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ProvideStatusOfManagementPlaneTransport = function v1ProvideStatusOfManagementPlaneTransport (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1ProvideStatusOfManagementPlaneTransport(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RegardApplication = function v1RegardApplication (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1RegardApplication(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RegardController = function v1RegardController (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1RegardController(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1RegardLoadBalancer = function v1RegardLoadBalancer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1RegardLoadBalancer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateApplicationTemplate = function v1UpdateApplicationTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1UpdateApplicationTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateControllerTemplate = function v1UpdateControllerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1UpdateControllerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateLoadBalancerTemplate = function v1UpdateLoadBalancerTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1UpdateLoadBalancerTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1UpdateMountPointTemplate = function v1UpdateMountPointTemplate (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.v1UpdateMountPointTemplate(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
