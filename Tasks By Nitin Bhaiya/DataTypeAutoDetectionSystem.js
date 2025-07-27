let x=["123","abc",123,false,"false"];
for (i=0;i<x.length;i++){
    if(isNaN(x[i])){
        console.log(`type of  value : ${x[i] } is: ${typeof x[i]} `)
        x[i]=Number(x[i])
        console.log(`Now after converting its type is  ${typeof x[i]}`)
    }
    else
    {
        console.log("it is already a number")
    }
}