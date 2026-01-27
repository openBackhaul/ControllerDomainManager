'use strict';


/**
 * Returns auth source
 *
 * uuid String 
 * returns inline_response_200_92
 **/
exports.getMongodbClientAuthSource = function(url) {
return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:auth-source" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });

}

/**
 * Returns collection name
 *
 * uuid String 
 * returns inline_response_200_96
 **/
exports.getMongodbClientCollectionName = function(url) {
  return new Promise(async function(resolve, reject) {
  
   try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:collection-name" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
  
  
}


/**
 * Returns database name
 *
 * uuid String 
 * returns inline_response_200_95
 **/
exports.getMongodbClientDatabaseName = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:database-name" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });

}
   
   



/**
 * Returns life cycle state of the connection towards Mongodb
 *
 * uuid String 
 * returns inline_response_200_98
 **/
exports.getMongodbClientLifeCycleState = function(url) {
 
 return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:life-cycle-state" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });

}
 
  


/**
 * Returns operational state of the connection towards Mongodb
 *
 * uuid String 
 * returns inline_response_200_97
 **/
exports.getMongodbClientOperationalState = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:operational-state" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });

}
  
  
 

/**
 * Returns password
 *
 * uuid String 
 * returns inline_response_200_94
 **/
exports.getMongodbClientPassword = function(url) {

  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:password" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });

}
  



/**
 * Returns user name
 *
 * uuid String 
 * returns inline_response_200_93
 **/
exports.getMongodbClientUserName = function(url) {

  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "mongodb-client-interface-1-0:user-name" : value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });

}
  
 

/**
 * Configures auth source
 *
 * body Auth_authsource_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putMongodbClientAuthSource = function(url, body) {
  return new Promise(async function (resolve, reject) {
     try {
       await fileOperation.writeToDatabaseAsync(url, body, false);
       resolve();
     } catch (error) {
       reject(error);
     }
   });
}


/**
 * Configures collection name
 *
 * body Mongodbclientinterfaceconfiguration_collectionname_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putMongodbClientCollectionName = function(url, body) {
  return new Promise(async function (resolve, reject) {
     try {
       await fileOperation.writeToDatabaseAsync(url, body, false);
       resolve();
     } catch (error) {
       reject(error);
     }
   });
}


/**
 * Configures database name
 *
 * body Mongodbclientinterfaceconfiguration_databasename_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putMongodbClientDatabaseName = function(url, body) {
  return new Promise(async function (resolve, reject) {
     try {
       await fileOperation.writeToDatabaseAsync(url, body, false);
       resolve();
     } catch (error) {
       reject(error);
     }
   });
}


/**
 * Configures password
 *
 * body Auth_password_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putMongodbClientPassword = function(url, body) {
   return new Promise(async function (resolve, reject) {
     try {
       await fileOperation.writeToDatabaseAsync(url, body, false);
       resolve();
     } catch (error) {
       reject(error);
     }
   });
}


/**
 * Configures user name
 *
 * body Auth_username_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putMongodbClientUserName = function(url, body) {
   return new Promise(async function (resolve, reject) {
     try {
       await fileOperation.writeToDatabaseAsync(url, body, false);
       resolve();
     } catch (error) {
       reject(error);
     }
   });
}

