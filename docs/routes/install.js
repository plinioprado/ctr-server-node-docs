// install route

const express = require('express');
const installControllerBase = require('../../base/controller/install');
const installControllerDocs = require('../controllers/install')
const logger = require('../../base/controller/logger');

const router = express.Router();

router.get('/resetdb', async (req, res) => {

  try {
    logger.log('router install will reset base');

    const baseData = await installControllerBase.resetDb();
    logger.log('router did reset base db and got', baseData);

    const baseDocs= await installControllerDocs.resetDb();
    logger.log('router did reset docs db and got', baseDocs);

    res.status(200).send(baseDocs);
  } catch (err) {
    res.status(500).send(err)
  }
});

module.exports = router;

