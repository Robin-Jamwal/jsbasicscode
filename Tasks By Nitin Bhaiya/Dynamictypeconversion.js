let num="123.45";
console.log(`the original type of ${num} is : ${typeof num}`)

let numconv=Number(num);
console.log(`the original type of ${numconv} is : ${typeof numconv}`);
console.log(`lets check it is "==" and "==="  `)
if( num === numconv){{
    console.log("yes it has same datatype and same values" );
}}
else if(num==numconv){

    console.log("only values are same");
}
else{
    console.log("not same")
}





let strconv=String(num);
console.log(`the original type of ${num} is : ${typeof strconv}`);
if( num ===strconv){{
    console.log("yes it has same datatype and same values" );
}}
else if(num==strconv){

    console.log("only values are same");
}
else{
    console.log("not same")
}


let boolconv =Boolean(num);
console.log(`the original type of ${num} is : ${typeof boolconv}`)
if( num === boolconv){{
    console.log("yes it has same datatype and same values" );
}}
else if(num==boolconv){

    console.log("only values are same");
}
else{
    console.log("not same")
}



