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
	Read the list of a JSON
*/
exports.groupList = function(filename) {
  let groupList = Object.values(filename).sort((a, b) => a.id - b.id);
  return groupList;
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

