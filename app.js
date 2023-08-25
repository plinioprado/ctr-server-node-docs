// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// dependencies - base
const settings = require('./base/settings.json');
const loginRoute = require('./base/routes/login');
const auxRoute = require('./base/routes/aux');

// dependencies - docs
const installRoute = require('./docs/routes/install');

// app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
const port = 4000;

// routing - bas
app.use((req, res, next) => {
  if (settings.auth.enabled) {
    const token = req.headers.authorization;
    const passToken = settings.auth.token;
    if (settings.auth.enabled && token !== passToken && req.url !== '/api/login') {
      return res.status(403).json({ error: 'invalid access' });
    }
  }
  next();
});
app.use('/api/login', loginRoute);
app.use('/api/install', installRoute);
app.use('/api/role', auxRoute);
app.use('/api/setting', auxRoute);
app.use('/api/tenant', auxRoute);
app.use('/api/user', auxRoute);

// routing - others
app.get('/*', (req, res) =>  res.status(404).send('Invalid'));

// run
app.listen(port, () => console.log(`app listening in localhost:${port}`));

module.exports = { app };
