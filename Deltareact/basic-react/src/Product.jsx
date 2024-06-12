import "./Product.css";
import Price from "./Price.jsx";
function Product({Title,idx}){
  let oldPrices=["12,495","11,900","1,599","599"];
  let newPrices=["8,999","9,199","899","278"];
  let description=[
    ["8000 DPI","5 Programmable buttons"],
    ["Intutive surface","5 programmable button"],
    ["Designed for Ipad Pro","Intutive surface"],
    ["Wireless","optical orientation"],
  ]
      
    return(
      <div className="Product">
        <h4>{Title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
      </div>
    )
}

export default Product;