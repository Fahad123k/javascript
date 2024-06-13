function myfunction(){

    console.log("inside the function value of x: ",x)
    var x=6;
}

// myfunction() 


var g=21;

const fun=function(){
    console.log("val of g:",g) //output is undefined 
    var g=20;
}

fun()
// undefined output because g is in the scope of  function fun so its get hoisted and initialize not assigned