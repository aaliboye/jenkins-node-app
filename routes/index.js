var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Bienvenue dan jenkins-node-app');
});

module.exports = router;
