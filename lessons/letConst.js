

function dataTypes(){

}

// let are block scope 
// let can not be re declared
// let and cosnt are lock scope while 
// you can re declare var value and var is global scope you can access var value from any where in the script


var nameval="nishu";

console.log('var outter block',nameval);

{
    var nameval=55;
    console.log('var inside the block',nameval);
}


// but in the case of let and cost 
let age=55;
console.log('value of age beyond the block',age);
{


    let age=66

    console.log('let us try acces let which is declared above this block',age);

}


console.log('let us try o acces let after block',age);


module.export =dataTypes;