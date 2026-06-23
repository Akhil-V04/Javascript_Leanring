//sort() --> sorts in lexicographical order by default
//lexicographical = (alphabet + number + symbol) as strings

//example1
let fruits =["Banana", "Orange", "Apple", "Mango", "Gauva","Pineapple", "Grapes"];
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Gauva', 'Grapes', 'Mango', 'Orange', 'Pineapple' ]

//example2
let numbers =[1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers); // [ 1, 100000, 21, 30, 4 ] --> sorted as strings
numbers.sort((a,b)=>a-b); //ascending order
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]
numbers.sort((a,b)=>b-a); //descending order
console.log(numbers); // [ 100000, 30, 21, 4, 1 ]


//example3
const people=[{name:"Akhil", age: 21, gpa: 9.0},
              {name: "bhavesh", age: 22, gpa: 8.5},
              {name: "charan", age: 20, gpa: 9.5},
              {name: "david", age: 23, gpa: 8.0}]
people.sort((a,b)=>a.age-b.age); //ascending order of age
console.log(people); // [ { name: 'charan', age: 20, gpa: 9.5 }, { name: 'Akhil', age: 21, gpa: 9 }, { name: 'bhavesh', age: 22, gpa: 8.5 }, { name: 'david', age: 23, gpa: 8 } ]
people.sort((a,b)=>b.gpa-a.gpa);   //descending order of gpa
console.log(people); // [ { name: 'charan', age: 20, gpa: 9.5 }, { name: 'Akhil', age: 21, gpa: 9 }, { name: 'bhavesh', age: 22, gpa: 8.5 }, { name: 'david', age: 23, gpa: 8 } ]