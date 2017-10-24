var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with api');
});
router.get('/get', function(req, res, next) {
    res.send('respond with get');
});
router.post('/post', function(req, res, next) {
    res.send('respond with post');
});
module.exports = router;
