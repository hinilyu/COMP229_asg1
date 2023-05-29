// Filename: index.js
// Name: Man Hin Tse
// ID: 301243374
// Date: 30 May 2023

var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page: 'Home', menuId:'home' });
});

router.get('/about-me', function(req,res, next){
  res.render('about', {page: 'About Me', menuId: 'about-me'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {page: 'Projects', menuId:'projects'})
})

router.get('/services', function(req, res, next) {
  res.render('services', {page: 'Services', menuId:'services'})
})

router.get('/contact', function(req, res, next) {
  res.render('contact', {page: 'Contact', menuId:'contact'})
})

app.post('/contact',function(request,response){
  res.send('Post');
  console.log(request.body) //you will get your data in this as object.
})

module.exports = router;
