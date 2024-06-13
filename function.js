// anonymous function a function which has no name
// const square= function (num) {
//     return num*num;
// }

/* 

// function (num) {
//     return num*num;
// }
    
whole commented part is a anonymous function.
An anonymous function can be assigned to bariable or 
can be passed as callback  may be
*/

// what is function expression 
//  Afunction inside a variadble is called function expression

// what is first class function 
// A function in a language can be trated as variable and passed as an argumetn ann manuplate them

function square(x){
    return x*x;
}

function display(fn){

    console.log("Square is:",fn(5))

}


// display(square);
// what is iavascript IIFE function 
// IIFE immediately function expression
/* a function is is wrap in parenthesis with  */


// (function upper(x){
//     return (function(y){

//         console.log(x)
//     })(2)
// })(1)

/* // In above firstly search the variable x their scope if does not it goes their above scope known as lexical
//  This concept known as closure  */


// (x=>(y=>console.log(y))(2))(6)


// function scope

// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

// console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

// console.log(getScore()); // "Chamakh scored 5"

// what is function hoisting
// when you call a function before defination its hosted at top its called function hoisting
// function is hosted but not var varibale


// myfunction()

function myfunction(){
    console.log("function hosted")
}



var g=21;

const fun=function(){
    console.log("val of g:",g)
    var g=20;
}

// fun()

// Q Params vs Argument
function mytest(param1,param2) { // receivig a value inside a fucntion called params
    console.log(param1+param2)
}

const arg1=5 ;
const arg2=15 ;
// mytest(arg1,arg2) //passing a value to the function called a arguments

// Q what is rest and spread operator


function addNums(...rest) {// getting all the argument in a array called rest

    console.log(typeof(rest))
}


const spreadArr=[1,2]

addNums(...spreadArr)// sending all the values
// addNums({name:"nishu"},[2,5,6,],"hello hi")// sending all the values

// Question based on rest and spread

// const fn= (a,x,...nums,y){ // Rest parameter must be last formal parameter its give error
//     console.log(x,y,nums)
// }

const fn= (a,x,y,...nums)=>{ 
    console.log(a,x,y,nums);
}


fn(2,5,3,6,5,8,9)