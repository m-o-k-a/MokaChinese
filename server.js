//REQUIRE
var express = require('express');
var mustache = require('mustache-express');
var convert = require('./scripts/convert.js')
var app = express();
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', './views');

//PATH TO JSON
var personal_pronoun = './datas/personal_pronoun.json';

//SERVER ROAD
app.get('/personal-pronoun/', (req, res) => {
	res.render('group', convert.groupList(personal_pronoun));
});
app.get('/personal-pronoun/:id', (req, res) => {
	var data = convert.readStrokes(personal_pronoun, req.params.id);
	data["group"] = "personal-pronoun"
	res.render('word', data);
});

//SERVER LAUNCH
app.listen(3000, () => console.log('mokachinese | http://localhost:3000'));


//JSON FILES
  //  "": {"zh": "", "pinyin": "", "meaning": "", "level": 1},