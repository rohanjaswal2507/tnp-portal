var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user', function(req, res) {
  res.render('index', { title: 'User' });
});

module.exports = router;
