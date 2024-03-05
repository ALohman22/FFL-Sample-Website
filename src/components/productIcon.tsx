import React from "react";



const ProductIcon: any = ({prod})=> {
    //console.log(prod[0])
    //console.log(prod[3])
    //console.log(prod)
    return(
    <div id='prodIcon'>
        <p id='prodName'>{prod[1]}</p>
        <img id='prodImage' src={prod[3]}/>
    </div>
    )
}

export default ProductIcon