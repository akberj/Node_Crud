var express = require('express');
var router = express.Router();

let Article = require('../models/article');

router.get('/', (req, res, next) => {
res.render('test.html');
/*


Article.find({}, (err,articles)=>{

if(err){console.log(err);}
else{
res.render('test.html', {

title: 'Articles',
articles: articles

});
}

});
	
*/
});

module.exports = router;