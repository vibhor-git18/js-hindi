// // primitive

// // 7 types : string,Number, Boolean, null, undefined, symbol,BigInt

// const score =100 

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// // Reference or Non-Primitive

// // Array, objects, Functions

// const heros = ["shaktiman"]
// {
//     name: " Vibhor",
//     age: 22, 
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof myFunction);


// ******** memory ******
// stack(primitive), heap(Non- primitive)

let myYoutubename = "Vibhor"

let anothername = myYoutubename
anothername ="Dhairya"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upi: "user@ybl",

}

let userTwo = userOne

userTwo.email = "Vibhor@"

console.log(userOne.email);
console.log(userTwo.email);