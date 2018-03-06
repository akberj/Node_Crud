	const express = require('express'),
path = require('path'),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
app=express();


// db connection
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

db.once('open',()=>{
	console.log('db is connected');
});


// requires
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
let Article = require('./models/article');

// view articles
app.get('/', (req, res)=>{

	
				res.sendFile(__dirname+ '/router/views/index.html',{ 
					
				}

				);

	

});

app.get('/articles', (req, res)=>{

	Article.find((err, articles)=>{
		if(err){console.log(err)}
			else{
				var userdata = articles;
				res.json(userdata);
				/*res.sendFile(__dirname+ '/views/index.html',{ 
					title: 'Articles', 
					articles:articles

				}

				);*/

			}

	});

});


//single article view
app.get('/article/:id', (req, res)=>{
	let query = {_id: req.params.id};
	Article.findById(query,(err,article)=>{
		if(err){console.log(err)}
			else{
				res.render('article', {
					title: 'Article',
					article:article
				});
			}
	});
});

//article edit view

app.get('/article/edit/:id', (req, res)=>{
	let query = {_id: req.params.id};
	Article.findById(query,(err,article)=>{
		if(err){console.log(err)}
			else{
				res.json(article);
			}
	});
});

app.post('/article/update/:id', (req, res)=>{
	let query = {_id: req.params.id};
   let article = {};

   article.title = req.body.title;
   article.author = req.body.author;
   article.body = req.body.body;
   Article.update(query,article,(err)=>{

   	if(err){console.log(err)}
   		else{
           console.log('Article updated');
           res.redirect('/');	
   		}
   });
});

// article delete

app.post('/article/delete/:id', (req, res)=>{
 //window.confirm("Are you Sure?": );
 //if(confirm == true){ 
	let query = {_id: req.params.id};
	Article.remove(query,(err)=>{

   	if(err){console.log(err); return;}
   		else{
           console.log('Article delete');
           res.redirect('/');	
   		}

	});
/*}
else{
	console.log("nothing deleted");
}*/
});

//add article
app.get('/articles/add', (req, res)=>{

	res.render('add_article');
});

app.post('/articles/add', (req, res)=>{

	let article = new Article();
	article.title = req.body.title;
	article.author = req.body.author;
	article.body = req.body.body;

	article.save((err)=>{
			if(err){console.log(err)}
   		else{
           console.log('Article added');
           res.redirect('/');	
   		}
	})
})


app.listen(2000, ()=>{
	console.log('server stared on 2000');
});