var express = require('express');
var router = express.Router();
let user = require('../Constant/userList');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
