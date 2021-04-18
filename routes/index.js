var express = require('express');
var router = express.Router();


router.get('/', async function (req, res, next) {
    res.render('index');
});

router.get('/drawing', function (req, res, next) {
  res.render('drawing');
});

router.get('/3d', function (req, res, next) {
  res.render('3d');
});


router.get('/cv', function (req, res, next) {
  res.render('cv');
});


router.get('/projects', function (req, res, next) {
  res.render('projects');
});


router.get('/web', function (req, res, next) {
  res.render('web');
});



module.exports = router;
