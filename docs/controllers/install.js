// Install controller

const dao = require('../dao/dao-psql');

const logger = require('../../base/controller/logger');

const resetDb = () => {
  logger.log(`controller install will reset db`);
  return dao.resetDb()
    .then ( (result) => {
      logger.log(`controller install did reset base db`);
      return result;
    })
    .catch (err => {
      logger.log(`controller install failed to reset db: ${err}`);
      throw err
    });
}

module.exports = {
  resetDb
}
