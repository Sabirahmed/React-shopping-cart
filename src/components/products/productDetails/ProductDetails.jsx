import React, { Component } from 'react';
import Product from '../../product/Product';


export default class ProductDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: [],
    //         product: {},
    //         error: '',
    //         isLoading: false
    //     }
    // }

    // componentDidMount = ()=> {
    //     //console.log(this.props?.match?.params?.id);
    //     this.setState({isLoading: true})
    //     getData(`albums/${this.props?.match?.params?.id ?? 0}`).then((res) => {
    //             //console.log(res.data);
    //             this.setState({product:res.data});
    //         }).catch(error => {
    //             console.log('error', error);
    //         }).finally(()=> {
    //             this.setState({isLoading: false});
    //         })
    // }

    addToCart = (product) => {
       // console.log("add-to cart", product);
        this.props.actions.addToCart(product);
    }
    render() { 
        const {product} = this.props;
        return ( 
            <>
            {
                product? <> 
                <button onClick={()=> this.props.history.push('/products')}> Back </button>
                <Product product={product ?? {}}>
                    <span> Adding extra details </span><br />
                    <button onClick={()=>this.addToCart(product)}>Add-To-Cart</button>
                </Product>

                </> : <h1> No Details found for the product id #{this.props?.match?.params?.id}</h1>
               } 
            </>
         
        );
    }
}

