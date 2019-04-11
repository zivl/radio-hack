var express = require('express');
var router = express.Router();
var audio = require('osx-audio');

var input = new audio.Input();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let i = 0;

router.get('/stream', function (req, res, next) {
  res.set('content-type', 'audio/wav');
  // res.set('accept-ranges', 'bytes');
  res.set('Transfer-Encoding', 'chunked')

  input.pipe(res);

})

module.exports = router;
