function customRender(maincontainer,reactElemnts){
    // const domElement=document.createElement(reactElements.type);
    // domElement.innerText=reactElements.children;
    // domElement.setAttribute('href',reactElements.props.src);
    // domElement.setAttribute('target',reactElements.props.target);
    // console.log(domElement);

    

    const domElement=document.createElement(reactElements.type);
    domElement.innerHTML=reactElements.children;
    for(const prop in reactElements.props){
        if(prop ==='children') continue;
            domElement.setAttribute(prop,reactElements.props[prop])
    }
    maincontainer.appendChild(domElement);
}
const reactElements={
    type:'a',
    props:{
        src:'https://www.google.com',
        target:'_blank',
    },
    children:'visit in Google',
}
const mainContainer=document.querySelector("#root");

customRender(mainContainer,reactElements);