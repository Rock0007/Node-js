//CommonJs, every file is module (by default)
//Modules - Encapsulated code (Only shared Minimum)

const names = require("./2-names");
const sayHi = require("./3-utils");
const data = require("./4-alternative-flavor");
const mind = require("./5-mind-gernade");

//file 2 and 3
sayHi("batman");
sayHi(names.Name_1);
sayHi(names.Name_2);

//file 4
console.log(data);

//file 5
console.log(mind);
