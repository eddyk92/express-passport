var express = require('express');
var router = express.Router();

router.get('/', function ensureAuthenticated(req, res, next) {
	if(req.isAuthenticated()) { return next();}
  	res.send('/login');
})

/* GET users listing. */
router.get('/', function(req, res, next){
	res.send('respond with a resource');
});

module.exports = router;
