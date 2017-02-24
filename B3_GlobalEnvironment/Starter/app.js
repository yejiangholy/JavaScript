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



// funciton is object !!! 
function greet(){
    console.log('Hi');
}

greet.language = 'english';

greet();
console.log(greet.language);

var anno = function() {
    console.log('I am a anno function');
}

anno();
// first class function 

// what is this mean ? 

// two this are equal, since they all point to the golbal window 
function a(){
    console.log(this);
}
console.log(this);
a();

// this--> menas var c  --> so this always point to the environment its lives with 
var c = {
    name: 'The c object',
    log: function(){
        console.log(this);
}
}
c.log();


///// 


var arr = [1, 2, 3, 4]

var myArr = [1, true, {name: 'Tony'}, function(name){
    console.log("anything at all")
}]

// 

function greet(first, second, last){
    // set default value if not passing 
    last = last || 'english';
    
    if(arguments.lengh === 0){
        console.log("missing paramieters")
        return; 
    }
    
    console.log(first);
    console.log(seoncd);
    console.log(last);
}

// IIFE 
// notice that in this way greeting var is a local var that not affacted by any 
// golobal variable at all 

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + '' + name);
}('John'));



// closures 

function greet(whayToSay){
    return function(name){
        console.log(whayToSay + ' ' + name)
    }
}

greet('Hi Carter')('you are the best !')
// or 
var sayHi = greet('Hi Carter')
sayHi('You are the best !')


//example of closure 
function builFunc(){
    var arr = [];
    
    for(var i=0;i<3;i++){
    arr.push(
        function(){
            console.log(i);
        }
    )
   }
    return arr; 
}

var fs = buildFunc(); 

fs[0]();
fs[1]();
fs[2]();

// all there will print 3, casue when we excuate the functions, i is 3 











