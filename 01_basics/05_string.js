const name = "Vibhor"
const repocount =50

// console.log(name + repocount +"Value" );// don't uss this syntax

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Vibhor-ag')  //another way to for string

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4) //last number character will not included
console.log(newString);

const anotherString = gameName.slice(-8,4) // slice will follow negative value but substring will not follow any negative value
console.log(anotherString);

const newStringOne = "     Vibhor   "
console.log(newStringOne);
console.log(newStringOne.trim()); // trim will remove the space


const url = "https://Vibhor.com/Vibhor%20Agarwal"

console.log(url.replace('%20', '-'))

console.log(url.includes('Vibhor')) //check if that keyworld is present

console.log(gameName.split('-'));
 