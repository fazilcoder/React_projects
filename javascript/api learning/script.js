let url3="http://universities.hipolabs.com/search?name=";
// let country="India";
let btn=document.querySelector("#submit");
btn.addEventListener("click",async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let clgsearch= await getclg(country);
    console.log(clgsearch);
    showclg(clgsearch)
})
function showclg(clgresearch){
    let list=document.querySelector('#list');
    list.innerText="";
    for (clg of clgresearch){
        console.log(clg.name);
        
        let li= document.createElement("li");
        li.innerText=clg.name;
        list.appendChild(li);
    }
}

async function getclg(country){
    try{
        let clgres= await axios.get(url3+country);
        return clgres.data;
    }
    catch(e){
        return e
    }
    
}




// let btn=document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//     let calling = await call(url);
//     // console.log(calling);
//     let p=document.querySelector("#result");
//     p.innerText=calling;
// })
// let url="https://catfact.ninja/fact";
// async function call(url){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact
//     }
//     catch(e){
//         return "A error was found"
//     }
    
// }
// let url2="https://dog.ceo/api/breeds/image/random";
// let btn2=document.querySelector("#image");
// btn2.addEventListener("click",async ()=>{
//     let imagegen=await randomImg(url2);
//     console.log(imagegen);
//     let img=document.querySelector("#result");
//     img.setAttribute("src",imagegen);

// })
// async function randomImg(url2){
//     try{
//         let calling2=await axios.get(url2);
//         return (calling2.data.message)
//     }
//     catch(e){
//         console.log(e)
//     }
// }





// fetch(url).then((response)=>{
//     console.log(response);
//     return response.json()
// }).then((data)=>{
//     console.log(data.fact);
// })
// .catch((reject)=>{
//     console.log(reject);
// })

// async function call(url){
//     try{
//         let result= await fetch(url);
//         let data= await result.json()
//         console.log(data.fact);
//     }
//     catch(e){
//         console.log(e);
//     }
    
// }

