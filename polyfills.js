

// syntax of foreach loop
// const numbers=[5,55,3,45,65,7,80,9,10,11,64,6];
const numbers=[1,2,3,4,5,6];

// numbers.forEach(myfunction);

// function myfunction(item,index,arr){
//     console.log("itmes:",item," index :",index);
// }


// with arraow call back function
// numbers.forEach((item,index)=>console.log(item,index))

// write polyfills of foreach


Array.prototype.myForEach=function(cb){
    console.log(this);
    for (let index = 0; index < this.length; index++) {

        cb(this[index],index,this)
        
    }
}


// numbers.myForEach(el=>console.log(el))


// sytax


Array.prototype.myMap=function(cb){
    arr=[];
    for (let index = 0; index < this.length; index++) {
        // const element = array[index];
        arr.push(cb(this[index],index))
        
    }
    return arr;
}

// const newArr=numbers.myMap(el=> el/el)
// console.log(newArr);

// filter function


// console.log(numbers.filter(el=>   el!=10))
Array.prototype.myFilter=function(cb){
    arr=[];
    for (let index = 0; index < this.length; index++) {
       if(cb(this[index])){
        arr.push(this[index])
       }
    }
    return arr;
}


// console.log(numbers.myFilter(el=> el%2==0))

// reduce method
// console.log(numbers.reduce((sum,el)=>sum+el))

Array.prototype.MyReduce=function(cb,initialValue){
    let accumulator=initialValue;
    for (let index = 0; index < this.length; index++) {
       accumulator=accumulator? cb(accumulator,this[index],index,this):this[index]
    }
    return accumulator;
}


// console.log(numbers.MyReduce((sum,el)=>sum+el))

// difference between foreach and map
// these both are array functions loops through items of the arrray
