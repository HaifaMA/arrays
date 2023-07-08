let students = ['Jaden', 'Neil', 'Mark', 'Kate', 'Anne'];
console.log(students.length);

console.log(students);
let popFunction = students.pop();
console.log(popFunction);
console.log(students);

console.log(students);
let pushFunction = students.push('Sandy');
console.log(pushFunction);
console.log(students);

console.log(students);
let shiftFunction = students.shift();
console.log(shiftFunction);
console.log(students);

console.log(students);
let unshiftFunction = students.unshift('Sandy')
console.log(unshiftFunction);
console.log(students);

console.log(students.includes('John'));

console.log(students.indexOf('Kate'));

console.log(`\nstudents-> ${students}`);
students.reverse();
console.log(`\nstudents-> ${students}`);

console.log([0] == [4]);