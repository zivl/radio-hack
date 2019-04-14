var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let i = 0;

router.get('/stream', function (req, res, next) {
  res.set('content-type', 'audio/wav');
  // res.set('accept-ranges', 'bytes');
  res.set('Transfer-Encoding', 'chunked')

  //TODO: someone connects here
})

router.get('/views-counter', function (req, res) {
  res.json({ counter: (Math.random()*100).toFixed(0) });
})

router.get('/media-stream', function (req, res) {
  res.render('mediaStream', { title: 'Wix Radio' });
})

module.exports = router;
