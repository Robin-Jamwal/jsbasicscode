let x='10';
let y="false";

let sum=x+y;
console.log(`the sum of x and y is : ${sum} and type is  ${typeof sum}`)

let sub=x-y;
console.log(`the sub of x and y is : ${sub}`)

let mul=x*y;
console.log(`the mul of x and y is : ${mul}`)

let div=x-y;
console.log(`the div of x and y is : ${div}`)

let num1=Number(x);
console.log(num1)


/*in sum we are adding string and boolean which will concatenate
 and act as string but in other operations it will be nan because there 
 are no numbers and if we want them to act as numbers
  we have to convert them to number first by using Number()*/