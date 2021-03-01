import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Product from '../product/Product';

export default class Products extends Component {
   
    addToCart = (product) => {
        this.props.actions.addToCart(product);
    }

    viewMore = (id) => {
        console.log(id);
        this.props.history.push(`/productDetails/${id}`);
    }


    render() { 
        const {products, isLoading} = this.props;
        return ( 
        <div>
            
             {/* {
                
                  // Validating user is logged-in or not
                localStorage.getItem('token')? 
                <>  */}
                     {
                        // Implement loading image here
                        isLoading? <> Loading....</> : 
                        
                        <>
                            {
                                products?.length > 0? 
                                <> 
                                
                                <h1>
                            
                                    List of products available: {products?.length}  </h1>
                                <ul>
                                {
                                    products.map((product, i) => {
                                        return <Product product = {product} key={product.id}> 
                                            <button onClick = {()=> this.addToCart(product)}>Add-To-Cart</button>
                                            <button onClick = {()=> this.viewMore(product.id)}>View More</button>
                                        </Product>
                                    })
                                }
                                
                            </ul>
                            </>: "No Products available"
                            
                            }
                                
                        </>
                    }
                {/* </>
                 : <> <Redirect to="/login" /></>
             } */}
           
            

        </div>
         );
    }
}
 



