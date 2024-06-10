

function dataTypes(){

}

// let are block scope 
// let can not be re declared
// let and cosnt are lock scope while 
// you can re declare var value and var is global scope you can access var value from any where in the script


// var nameval="nishu";

// console.log('var outter block',nameval);

// {
//     var nameval=55;
//     console.log('var inside the block',nameval);
// }


// but in the case of let and cost 
// let age=55;
// console.log('value of age beyond the block',age);
// {


//     let age=66

//     console.log('let us try acces let which is declared above this block',age);

// }


// console.log('let us try o acces let after block',age);






/* 
## shadowing
 In JavaScript, shadowing refers to the situation where a variable declared within a certain scope 
(e.g., a function or a block) has the same name as a variable declared in an outer scope. 
This causes the inner variable to "shadow" or obscure the outer variable within the inner scope. 
This can lead to confusion and potential bugs if not managed carefully.
*/

/* case 1 in case of shadowing var var by let no error  */
/*in case of shadowing let with var  gives error because  
when we declare var  by var keyword as you know var has global scope so it check entire script then gives error var .... is already declaed

in case of let as you know it's a block scope when block exuceted its variable by  decalring by let whic h is also vanished*/


function test(){
    var a="hi";
    let b='hello';



    if(true){
        // let a="hello";
        // var b="hii"; //illegal shadowing b=gives error
        console.log(a);
        console.log(b);

    }

    // console.log("a,b",a,b)
}

test()



/*  const and let variable can not be re declared in the same scope 
example let ab;
let ab;

but var can be declaed in the same scope
example 
var ac;
var ac;
*/

// const can;t initialize without any value
/* cosnt a; gives error */


let xy="aa"
xy="bb";

var test='yes';
test="changed";
const pi="3.141";
// pi='3.1415' error

// hoisting 
/* javascript execution context

steps
1 creation  and setups stack and heap
2 intitialze those variable and function with undefined
3 is execution */
// console.log(cos);

// what is TDZ temporal dead zone

/* 
A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.

A block is a pair of braces ({...}) used to group multiple statements.
Initialization occurs when you assign an initial value to a variable.
Suppose you attempt to access a variable before its complete initialization. In such a case, JavaScript will throw a ReferenceError.

So, to prevent JavaScript from throwing such an error, you’ve got to remember to access your variables from outside the temporal dead zone.

But where exactly does the TDZ begin and end? Let’s find out below.
*/



console.log(count)

var count="1";


/* printing before assing var variable gives un defined */


// console.log(increm)

// let increm=4

// Cannot access 'increm' before initialization because let var before assinging it goes to Temporal dead zone


module.export =dataTypes;