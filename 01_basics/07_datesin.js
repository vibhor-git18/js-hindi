// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 9, 10)
// console.log(myCreatedDate.toDateString());

// let createdDate = new Date(2026, 9,10, 5, 3)
// console.log(createdDate.toLocaleString());

let createdDate = new Date("2026-10-10") //YY-MM-DD
console.log(createdDate.toDateString());

let myCreatedDate = new Date("10-10-2026") //MM-DD-YY
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());