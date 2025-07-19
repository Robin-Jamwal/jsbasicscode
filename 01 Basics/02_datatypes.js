//  data types in js or any programming lang of two types - primitive non primitive 


/*
- Number
- string
- bigInt
- null
- undefined
- boolean
- symbol

=> Non-Primitive 
- array
- object
- classes

*/


let number =69;
console.log(number,"is",typeof number)

let str="Hello Viku";
console.log(str,"is",typeof str)





let bigInt=12345678901234567890n;
console.log(bigInt,"is",typeof bigInt)


let a=null;
console.log(a,"is",typeof a)

let y;
console.log(y,"is",typeof y)


let symbol = Symbol("&&&");
console.log(symbol,"is",typeof symbol)

let coder=false;
console.log(coder,"is",typeof coder)


/*-----------------Non Primitive--------------*/
let arr=[1,2,3,4];
console.log(arr,"is",typeof arr)

console.log(`${arr[0]} is Array`)

let obj={

    name:"Robin",
    age:22
};
console.log(obj,"is",typeof obj)



//  typeof
//  access object members
//  access array members
//  reassign the values of array and object members
 

//Accessing objects

console.log("Accessing Objects")

// console.log(obj.name)
// console.log(obj.age)
console.log(obj["name"])

// Arrays accessing
// console.log(arr[0])

// through loop
for (i=0;i<arr.length;i++){
    console.log(arr[i])
}

//Reassign the valuess

arr[0]=55;
console.log(arr)

obj.name="anshu";
console.log(obj)


