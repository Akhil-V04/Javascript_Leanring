let students = [
  { name: "Akhil", marks: 72 },
  { name: "Rahul", marks: 35 },
  { name: "Priya", marks: 88 },
  { name: "Sam", marks: 45 }
];

// filter - returns a NEW array with items that pass the test
let passed = students.filter(s => s.marks >= 40);
console.log(passed);

// find - returns the FIRST item that matches, not an array
let topper = students.find(s => s.marks > 80);
console.log(topper);

// some - returns true/false, checks if AT LEAST ONE matches
let anyoneFailed = students.some(s => s.marks < 40);
console.log(anyoneFailed);

// every - returns true/false, checks if ALL match
let allPassed = students.every(s => s.marks >= 40);
console.log(allPassed);