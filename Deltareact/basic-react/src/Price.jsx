export default function Price({oldPrice,newPrice}){
    let oldstyles={
        textDecorationLine:"line-through",
    };
    let newstyles={
        fontWeight:"bolder",
    }
    let pstyles={
        backgroundColor:"#e0c367",
        height:"30px",
        borderBottomLeftRadius:"22px",
        borderBottomRightRadius:"22px",
    }
    return (
        <div style={pstyles}>
        <span style={oldstyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newstyles}>{newPrice}</span>
    </div>
    );
}