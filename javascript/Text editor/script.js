let inpu=document.querySelector("input");
let p=document.querySelector("p");

inpu.addEventListener("input",function(){
    p.innerHTML=inpu.value;
})