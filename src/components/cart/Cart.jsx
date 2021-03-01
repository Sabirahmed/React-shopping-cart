import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Product from '../product/Product';


export default class Cart extends Component {
    
    constructor(props) {
        super(props);
       
    }

    removeFromCart = (id) => {
        console.log('remove from cart:', this.props.actions);
        this.props.actions.removeFromCart(id);
    }

    viewMore = (id) => {
        console.log(id);
        this.props.history.push(`/productDetails/${id}`);
    }


    render() { 

        console.log("cart value:", this.props);
        const {cart} = this.props;
        return ( 
        <div>
            {
                // Validating user is logged-in or not
                localStorage.getItem('token')?
                 <>
                     {
                        cart?.cartList?.length > 0? 
                        <> 
                        <h1>List of items in the cart: {cart?.cartList?.length} </h1>
                        <button onClick={()=>this.props?.actions?.clearCart()}>Clear</button>
                        {
                            cart?.cartList?.map((item)=> {
                                return <Product product={item} key={item.id} > 
                                    <button onClick={()=>this.removeFromCart(item.id)}>Remove-From-Cart</button>
                                    <button onClick={()=> this.viewMore(item.id)}>View More</button>
                                </Product>
                            })
                        }
                        </> : 
                        
                        <> No item in the cart </>
                    }

                 </> :

                <> <Redirect to="/login" /></>
            }
            

           
        </div> 
        );
    }
}



