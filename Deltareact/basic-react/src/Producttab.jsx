import  Product from"./Product.jsx";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
        
        <div style={styles}>
            
            <Product Title="Logitech MX Master" idx={0} />
            <Product  Title="Apple Pencil 2nd Gen" idx={1}/>
            <Product Title="Zebronics zeb-tranformer" idx={2}/>
            <Product Title="Petronics toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;