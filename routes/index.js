var express = require('express');
var router = express.Router();
var kafka = require('kafka'); 

/* GET home page.node --debug=5858 ./bin/www */
router.get('/', function(req, res, next) {
	console.log('test kafka');
	var consumer = new kafka.Consumer({
		host:'localhost',
		port:2181,
	})

	consumer.subscribeTopic('mytopic').on('message', function(topic, message) {
		console.log('Consumed message:', message)
	}).connect()
	res.render('index', { title: '测试kafka' });
});

module.exports = router;
