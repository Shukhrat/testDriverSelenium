var express = require('express');
var router = express.Router();
var webdriverio = require('webdriverio');
var options = {
	desiredCapabilites : { browserName: 'chrome' }
};
/* GET home page. */
router.get('/', function(req, res, next) {
	var title;
	webdriverio.remote(options).init().url('http://www.google.com').getTitle().then(function(title){
		console.log('title was: '+title);
		title = title;
	});
	console.log(title);
	res.render('index', {title: title})
});

module.exports = router;
