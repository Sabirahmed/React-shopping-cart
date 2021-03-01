import React from "react";

const Product = ({product, children}) => {

    const {id, title} = product;
    return (
        <li style= {{margin: '5px', border:'2px solid gray', padding: '10px', borderRadius: '10px', listStyleType:'none'} }>
            <div style = {{margin: '5px'}}> 
            <span>Id: {id}</span><br />
            <span>Title: {title}</span>
            </div>
            
           <div>
               {children}
           </div>
       
        </li>
    )
}



export default Product;