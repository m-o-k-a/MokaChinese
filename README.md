[![Generic badge](https://img.shields.io/badge/Project_Statut-Alpha-RED.svg)](https://github.com/m-o-k-a/MokaChinese/) [![Generic badge](https://img.shields.io/badge/Website_Statut-Not_Released-RED.svg)](https://github.com/m-o-k-a/MokaChinese/) ![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)

# MokaChinese
 Node.js website to list chinese vocabulary

 # Goal
 Make a chinese word library with pinyin, meaning and HSK level (maybe stokes order later)
 
 # Built With 
 - Dependency: [node.js](https://nodejs.org)
 - Framework: [express.js](https://expressjs.com/)
 - Template Engine: [mustache-express](https://www.npmjs.com/package/mustache-express)
 
>install and use in localhost:
>first, install node.js, then install theses package in the root of the project:
	>- npm install express.js
	>- npm install mustache-express
 
 # Project Advancement
** 23/02/2020**
> launch of the project
> Created group: personal-pronoun

------------

#What is planned next
- pages lists
- research a chinese word
- more group of words
- index for all group of words


------------

#How search (will) work
- queries for a chinese word:
> the idea is to convert the string given in an addition of unicode values using this function in ./scripts/convert.js:
```javascript
function toUnicode(string) {
	let length = string.length;
	let valueOf = 0;
	for(let index = 0; index<length; index++) {
		valueOf += string.charCodeAt(index);
	}
	return valueOf;
}
```
> then I will check among all JSON group of words where this value belong, if the function fint it, it will return an array of the group and the value and then throw it in the correct path
