// Data access object for postgreSql

require('dotenv').config();

const { Pool } = require('pg');
const logger = require('../../base/controller/logger');

const daoPsqlInstall = require('./dao-psql-install');

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

const resetDb = () => {
  logger.log('dao install will reset db');

  queryText = daoPsqlInstall.queryReset;

  return pool.query(queryText)
    .then(res => {
      logger.log('dao install did reset db', res);
      return true
    })
    .catch( err => {
      logger.log('dao install failed to reset db', err);
      throw err
    });
};

module.exports = {
  resetDb
}
