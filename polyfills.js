// syntax of foreach loop
// const numbers=[5,55,3,45,65,7,80,9,10,11,64,6];
const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(myfunction);

// function myfunction(item,index,arr){
//     console.log("itmes:",item," index :",index);
// }

// with arraow call back function
// numbers.forEach((item,index)=>console.log(item,index))

// write polyfills of foreach

Array.prototype.myForEach = function (cb) {
  console.log(this);
  for (let index = 0; index < this.length; index++) {
    cb(this[index], index, this);
  }
};

// numbers.myForEach(el=>console.log(el))

// sytax

Array.prototype.myMap = function (cb) {
  arr = [];
  for (let index = 0; index < this.length; index++) {
    // const element = array[index];
    arr.push(cb(this[index], index));
  }
  return arr;
};

// const newArr=numbers.myMap(el=> el/el)
// console.log(newArr);

// filter function

// console.log(numbers.filter(el=>   el!=10))
Array.prototype.myFilter = function (cb) {
  arr = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      arr.push(this[index]);
    }
  }
  return arr;
};

// console.log(numbers.myFilter(el=> el%2==0))

// reduce method
// console.log(numbers.reduce((sum,el)=>sum+el))

Array.prototype.MyReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    accumulator = accumulator
      ? cb(accumulator, this[index], index, this)
      : this[index];
  }
  return accumulator;
};

// console.log(numbers.MyReduce((sum,el)=>sum+el))

// difference between foreach and map
// these both are array functions loops through items of the arrray

// 1 differece one map return new array and foreach does not return new array

const newMap = numbers
  .map((el) => {
    return el + 3;
  })
  .filter((el) => el % 3 == 0);

// const newFor=numbers.forEach((el,index)=>{
//     return numbers[index]=el+3
// })

// console.log(newMap,"for each output\n")
students = [
  { name: "Nishu", roll: 2522, marks: 50 },
  { name: "Amit", roll: 2523, marks: 15 },
  { name: "Sara", roll: 2524, marks: 88 },
  { name: "John", roll: 2525, marks: 92 },
  { name: "Emma", roll: 2526, marks: 67 },
  { name: "Liam", roll: 2527, marks: 45 },
  { name: "Olivia", roll: 2528, marks: 55 },
  { name: "Noah", roll: 2529, marks: 78 },
  { name: "Sophia", roll: 2530, marks: 85 },
  { name: "Mason", roll: 2531, marks: 19 },
];

// question 1 name of this all student with capital case
// by map method
const names = students.map((el) => el.name.toUpperCase());
// by traditional for

let namesStd = [];
for (let index = 0; index < students.length; index++) {
  namesStd.push(students[index].name.toUpperCase());
}
// by foreach

let arrname = [];
students.forEach((el) => {
  // console.log(el.name.toUpperCase())
  arrname.push(el.name.toUpperCase());
});

// console.log(arrname)

// q2 return those detals whose marks grater than 50 and roll grater than 2525

let marksFilter = students.filter(
  (student) => student.marks > 50 && student.roll > 2525
);
// console.log(marksFilter);
// q3 sum of all the marks of the student
const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);
// q4 return names of the student whose score is greater tha 60

const marksg60 = students
  .filter((stu) => stu.marks > 60)
  .map((stu) => `${stu.name}:${stu.marks}`);

// console.log(marksg60)
// Q5 names of the student whose score is greater tha 60 and whose after tjhat ad 20 grace marks whose score less than 60

const grace20 = students
  .map((stu) => {
    if (stu.marks < 60) stu.marks += 20;
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(grace20);
