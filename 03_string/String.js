let str="  Hello My Name is Robin  ";
//String methods


//Length
console.log(`the length of string is ${str.length}!!`)

//char at
console.log(`the character at specific position is ${str.charAt(9)}`)

//at

console.log(`${str.at(-1)}`)


//indexof
console.log(`the string at index ${str.indexOf('o')}`)

//last index
console.log(`the last index of ${str.lastIndexOf("i")}`)
//includes
console.log(`it includes ${str.includes("Robin")}`)

//touppercase

console.log(`conver it to uppercase ${str} --> : ${str.toUpperCase()}`)

//tolowercase

console.log(`convert it to lowercase ${str} --> : ${str.toLowerCase()}`)

//slice
console.log(`slicing ${str} --> ${str.slice(1,4)}`)


//trim
console.log(`removing whitespacing ${str.trim()}`)

let a='hello';
let b='world';
console.log(`after concat it is --> ${a.concat(" ",b)}`)



// for each loop

 let c= "hello";

[...c].forEach(function(char) {
  console.log(char);
});


//for loop
for (i in str){
    console.log(str[i])
}
for(i=0;i<str.length;i++){
    console.log(str[i])
}