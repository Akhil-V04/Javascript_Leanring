let students = [
  { name: "Akhil", marks: 72 },
  { name: "Rahul", marks: 35 },
  { name: "Priya", marks: 88 }
];

// forEach - just loops, no return
students.forEach(s => console.log(s.name));

// map - returns a NEW array
let names = students.map(s => s.name);
console.log(names);

let marksDoubled = students.map(s => s.marks * 2);
console.log(marksDoubled);