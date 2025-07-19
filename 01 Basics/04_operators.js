
// Arithmetic      `+`, `-`, `*`, `/`, `%`, `**`           
// Assignment      `=`, `+=`, `-=`, `*=`, `/=`                                                     
// Comparison      `==`, `===`, `!=`, `!==`, `>`, `<`                                                                                                                              | Logical operations (AND, OR, NOT) |
// Bitwise         `&&`, ||`                                                       
// String          `+`, `+=`                                                     
// Ternary         `condition ? val1 : val2`                                     
// Spread    `...`             



// let num1 = 2;
// let num2 = 3;
// sum = num1+num2;
// minus = num1-num2;
// multiplication = num1*num2;
// divide = num2/num1;
// remainder = num2%num1;





// console.log(sum);
// console.log(minus);
// console.log(multiplication);
// console.log(divide);
// console.log(remainder);
// console.log(remainder);





function Arithmetic(num1,num2) {
    let sum=num1+num2;
    console.log("sum is"+" "+sum)
    let min=num1-num2;
    console.log("min is"+" "+min)
    let mul=num1*num2;
    console.log("mul is"+" "+mul)
    let div=num1/num2;
    console.log("division is"+" "+div)
    let mod=num1%num2;
    console.log("remainder is"+" "+mod)
}
Arithmetic(2,1)


function Assignment(score=100,num1) {
     score += num1;
    console.log("sum is"+" "+score)
     score -= num1;
    console.log("min is"+" "+score)
    score *=num1;   
    console.log("mul is"+" "+score)
}
Assignment(undefined,5)



function Comparison(a,b){
    if(a==b){
        console.log("Both are equals")

    }
    else if(a!=b && a>b){
        console.log("not equal but a is greater than b ")
    }
    else if(a!=b && a<b){
        console.log("not equal but b is greater than a");
    }

    
}
Comparison(5,4)