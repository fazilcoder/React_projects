let gameseq=[];
let userseq=[];
let colors=["yellow",,"red","green","purple"]

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game has stared");
        started=true;
        } 
        levelup()
})
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}
// computer generated color
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=colors[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randbtn);
}
// for checking the user and system
function checkAns(idx){
    
    if(gameseq[idx]==userseq[idx]){
        if(gameseq.length===userseq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    else{
        h2.innerText=`game over press any key to start`;
        reset();
    }
}
//user generated color
function btnpress(){
    let btn=this;
    userFlash(btn);

    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1)
}
let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    
}
