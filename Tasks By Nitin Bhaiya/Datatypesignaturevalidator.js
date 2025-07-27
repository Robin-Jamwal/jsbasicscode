let val="42";
let val2="foo";
let val3=true;

function Datatypesignature(val) {
    if(typeof val =="number"){
        console.log('it is number')
    }   
    else if (!isNaN(val)){
        console.log('yes it is a string and it can be number')
    }
    else{
        console.log("it is a string and cant be converted to number")
    }
}
Datatypesignature(val2);



