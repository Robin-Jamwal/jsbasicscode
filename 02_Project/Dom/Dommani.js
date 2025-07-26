var box=document.querySelector("#box");
var btn=document.querySelector("button");
var flag=1;

btn.addEventListener("click",function(){
    
    if (flag==0){
        
        box.style.backgroundColor="yellow";
        console.log("clicked")
        flag=1
    }
    else{
        box.style.backgroundColor="transparent";
        flag=0
        console.log("again  ")
    }
})

