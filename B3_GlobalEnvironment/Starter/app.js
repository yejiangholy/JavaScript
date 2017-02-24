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


function builFunc2(){
    var arr = [];
    
    for(var i=0;i<3;i++){
        let j = i;
    arr.push(
        function(){
            console.log(j);
        }
    )
   }
    return arr; 
}

var fs2 = buildFunc2(); 

fs2[0]();
fs2[1]();
fs2[2]();

// JS: funciton factory ex 
function makeGreeting(language){
    return function(first, last){
        if(language === 'en'){
            console.log('Hello'+fist +' '+ last);
        }
        if(language === 'es'){
            console.log('Hola'+first+' '+ last)
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John','Done');
greetSpanish('John','Done');


// closure and callback 

function sayHi(){
    
    var greeting = "Hi";
    setTimeout(function() {
        console.log(greeting);
    },3000);
}

sayHi();
// JQuery uses funtion expression and first-class functions 
$("button").click(function(){
      
});

// call back function --> give a function as a arguemt to another function to let it call  
//------------------------

// call() apply() and bind() 

var person{
    first: 'John',
    last::'Doe',
    getFullName: function(){
        var fullname = this.first + ' ' + this.last
        return fullname;
    }
}

var logName = function(l1, l2){
    console.log('Logged: ' + this.getFullName());
}

var logPersonName = logName.bind(person)

// bind make's that outer environment becomes what its bind() in, so this becomes what is inside () 

logName.call(person, 'Carter','Jiang');
logName.apply(person,['Carter','Jiang']);


// call and apply did almost the same thing with bind but even invoke the funtion 

// function borrwoing 

var person2 = {
    firstName: 'Jane',
    lastName: 'Done'
}
// use the funiton in the preson object in the person2 --> apply or call method 
console.log(person.getFullName.apply(person2));


//funtion currying 

// remember only bind will create a new copy of the function 

function multi(a,b){
    return a*b; 
}
// bind permantely set the b variable to value 2 
var multiByTwo = multi.bind(this,2);


var res = multiByTwo(4); 

console.log(res);













