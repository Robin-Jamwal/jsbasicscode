let a ="0";
let b=0;
let c=false;
let d=null;
let e=undefined;

function ComaprisonOperator(a,b){
    if(a==b && a===b){
        console.log('Both are same in data type and values');
    }
    else if (a==b){
        console.log(`both have same values but not same type because type of ${a} is : ${typeof a} and type of ${b} is : ${typeof b}`);
    }
    else(
        console.log(`both ${a} and ${b} are different as type of ${a} is : ${typeof a} and type of ${b} is : ${typeof b}`)
    )
}
ComaprisonOperator(a,b)