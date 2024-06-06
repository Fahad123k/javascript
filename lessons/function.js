function test(){

}


// first type of functyion
// function sub(){

//     console.log('hello iam sub fuction');

// }


// sub();



// second type of functiuon

// function sub(){
//     return "hello i am retunrd from sub function mujhe print karne ke liye koi recieve karne wala hona";
// }


// const returndval=sub();


// console.log(returndval);




// function sub(a,b){


// let first,second;
   
//     return a-b;
// }


// const result= sub(10,2);

// console.log(result);




// function  advance

// function fibbonacchi(a,b){
//     return a+b;
// }


// const fibbonacchi=(a,b)=>{
//     return a+b;
// }



// const fibbonacchi=(a)=>{
//     return a*a;
// }

// const fibbonacchi=a=>{
//     return a*a;
// }
// const fibbonacchi=a=>  {return a*a};
// const fibbonacchi=a=>  (a*a);
// const f=a=>  a*a;
// console.log((a=>  a*a)(10));
// let  myfunction=f(5)


// console.log(myfunction);


// (function(){
//     console.log('hello i am guess my name');
// })()




let marks={
    harry:"100",
    potter:"56",
    ram:"98",
    sham:"23",
    ham:"48",
    yafith:"67",
}

// for(let i=0; i<Object.keys(marks).length;i++)
// {
//     let key=Object.keys(marks)[i];
//     // console.log("Hii ",Object.keys(marks)[i]," your marks is",marks[Object.keys(marks)[i]]);
//     console.log(marks[key]);
// }


for(elem in marks){
console.log(marks[elem]);
}
module.export=test;