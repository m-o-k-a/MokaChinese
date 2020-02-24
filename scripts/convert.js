//REQUIRE
const fs = require('fs');

/*
	Read the word
*/
exports.read = function(filename, id) {
  let word = JSON.parse(fs.readFileSync(filename));
  if(id in word) {
    return word[id];
  } else {
    return null;
  }
};

/*
	Read the word and append its strokes images
*/
exports.readStrokes = function(filename, id, characterSet) {
  let word = JSON.parse(fs.readFileSync(filename));
  let characters = JSON.parse(fs.readFileSync('./datas/characters.json'));
  if(id in word) {
  	word[id]["strokes"] = characters[id];
    return word[id];
  } else {
    return null;
  }
};

/*
	Read the list of a JSON
*/
exports.groupList = function(filename) {
  return JSON.parse(fs.readFileSync(filename));
};


/*
	Convert chinese word to unicode
*/
exports.toUnicode = function toUnicode(string) {
	let length = string.length;
	let valueOf = 0;
	for(let index = 0; index<length; index++) {
		valueOf += string.charCodeAt(index);
	}
	return valueOf;
};

