var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.users = req.user || "";
	console.log(req.user);
  	res.render('index', { title: 'Express' });
});

module.exports = router;
