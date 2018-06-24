var express = require('express');
var router = express.Router();
// var request = require("request");
var watson = require("../middleware/watson");
var translator = require("../middleware/translate");


var text = 'Recruiters who are looking for Scholars in any IT area. Please send me a message I have the CVs of 10 newly graduates and seek to learn. Beforehand thank you very much!'



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/', translator.translate, watson.analyze, function(req, res, next) {
    res.render('index', {
        title: 'Express',
        text: req.body.text,
        results: req.analysis.tones
    });
});

module.exports = router;