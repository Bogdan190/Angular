var express = require('express');
var router = express.Router();

const data=[
  {
    text:'Реклама ремонта квартир в Киеве',
    image:'./assets/1.jpg'
  },
  {
    text:'Реклама ремонта квартир в Днепре',
    image:'./assets/1.jpg'
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data',(request, response)=>{
   response.json(data);
})





module.exports = router;
