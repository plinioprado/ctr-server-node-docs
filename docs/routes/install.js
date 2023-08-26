// install route

const express = require('express');
const controller = require('../../base/controller/install');
const logger = require('../../base/controller/logger');

const router = express.Router();

router.get('/resetdb', async (req, res) => {
  try {
    logger.log('router install will reset db');

    let result = await controller.resetDb(__dirname + '/../../base/dao/install-base.sql');
    logger.log(`router did route base resetdb and got ${JSON.stringify(result)}`);

    result = await controller.resetDb(__dirname + '/../dao/install-docs.sql');
    logger.log(`router did route docs resetdb and got ${JSON.stringify(result)}`);
    return res.status(200).send(true);
  } catch (err) {
    logger.log('router failed  to route docs resetdb and got', JSON.stringify(err));
    return res.status(500).send(false);
  }
});

router.get('/*', (req, res) => res.status(404).send('invalid'));

module.exports = router;
