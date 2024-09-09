// const dataTypes = require('./lessons/letConst')
// const test = require('./lessons/function')

// console.log('hello');
//  promises

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 5, 6]
        resolve(roll_no);
        reject("Error while fetching")
    }, 2000);

});


const getDetail = (index) => {
    return new Promise((resolve, reject) => {
        setTimeout((index) => {
            let data = `This is my roll number ${index} name is Nishu`
            resolve(data)
            reject("Error while fetching")
        }, 2000, index)
    })
}

// myPromise.then((roll_no) => {
//     // console.log('roll number is',roll_no);
//     getDetail(roll_no[1]).then((data) => {
//         console.log("hello world", data);

//     })
//         .catch(err => {
//             console.log('some error while fetching details', err);
//         })

// })
//     .catch((err) => {
//         console.log(err);

//     });


// asyn await

async function getdata() {
    const roll = await myPromise;

    const detail = await getDetail(roll[1])
    // console.log(detail);
    return detail;

}

// const getname=getdata()
// .then(data=>console.log(data))
// .catch(err=>{
//     console.log('some error occued');

// })


let arr = [1, 2, 3, 5, 8, 12]

// arr.push(4);
// arr.pop()

// const getone= arr.shift() // rome first elememt and return

// console.log(arr,typeof(getone),getone);

const unshift = arr.unshift(-2, -1, 0) // return new length

// console.log(unshift);

// arr.forEach((item,index)=>{
//     console.log(item,index);

// })

const dblarr = arr.map((item) => (2 * item)) // result a new array by  doing some operation on its itmes fetch individual
// console.log(2*item);




// console.log(arr);

const even = arr.filter((item) => {
    return item % 2 === 0 && item > 0
})
let found = arr.find(x => x > 10);
// console.log(found);

const arr1 = [1, 2, 3, 4]
const reduceval = arr1.reduce((acc, currVal) => acc + currVal, 0)

// console.log(reduceval);

const slice = arr.slice(3,) //Returns a shallow copy of a portion of an array into a new array object, selected from start to end (end not included).
// console.log(slice,",,",arr);


arr.splice(0, 5)// splice(position,NoOfItemsToBeRemoved) splice(0,2) [1,2,3,4,5]  =>[3,4,5]

// console.log(arr);

let mergedArr = arr1.concat(arr);

// console.log(mergedArr);


// console.log(foo());

function foo() {
    console.log("normal function");

}


// console.log(bar());

// function expression
const bar = () => {
    console.log("arrow function act as expression");

}

let funcs = [];
for (let i = 0; i < 3; i++) {
    funcs.push(function () {
        console.log("Values-", i);
    });
}

// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());


function counter() {
    let count = 0;
    return {
        increment: function () {
            return ++count;
        },

        getCount: function () {
            return count;
        }
        ,
        reset: function () {
            count = 0;

        },
        customVal: function (value) {
            return count = value

        }
    }
}

const myCounter = counter();

// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.getCount());
// console.log(myCounter.reset());
// console.log(myCounter.getCount());
// console.log(myCounter.customVal(12));

// clousers with itterators

function createIterators(array) {
    let index = 0;
    return {
        next: function () {
            if (array.length > index) return { value: array[index++], done: false }
            else return {value:null, done: false }
        }
    }
}


const myIterator= createIterators([1,2,3,4])

console.log(myIterator.next().value);
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next().value);
console.log(myIterator.next().value);
