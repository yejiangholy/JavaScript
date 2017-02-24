var english = {};
var spanish = {};

english.greetings = "Hello";
spanish.greetings = "Hola";

var objectLiteral = {
    firstName: 'Mary',
    isProgrammer: true
}

// from object --> Json string formart 
JSON.stringify(english)

//console.log(JSON.stringify(english))

// from Json String --> to an object 

function greet(){
    console.log('Hi');
}

greet.language = 'english';

greet();
console.log(greet.language);