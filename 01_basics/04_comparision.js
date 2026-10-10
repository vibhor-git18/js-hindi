console.log("2">1);
console.log("02">1);

console.log(null >0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that an equality check == and comparions
// ><>=<= work differently.
// comparsion convert null to anumber, treating as 0.
// that's why null >=0 is true ans null >0 is false
  

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// this type of conversion should be avoid 


// === 

console.log("2" === 2);