let input=document.querySelector("input");
let ul=document.querySelector("ul");
let btn=document.querySelector("button");


btn.addEventListener("click",function(){
    let item= document.createElement("li");
    item.innerText=input.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

    ul.appendChild(item);
    input.value="";
})
// using event bubling
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
         let listitem=event.target.parentNode;
         listitem.remove();
    }
})
// let delbtns=document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener("click", function(){
//         this.parentElement.remove();
        
//     })
// }