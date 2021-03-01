
import {getData} from '../../apis/api';
import React from 'react';


const HttpHoc = (Wrapper, params) => {
    
return class extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            products: [],
            product: {},
            error: '',
            isLoading: false
        }
    }

    componentDidMount = () => {
        console.log('component did mount', this.props);
        this.setState({isLoading: true});
        let paramURL = (params.isDetailPage)? `${params.url}/${this.props?.match.params?.id}` : params.url;
        getData(paramURL).then((res) => {
                if(params.isDetailPage) {
                    this.setState({product:res.data})
                }else {
                    this.setState({products:res.data});
                }
                
            }).catch(error => {
                this.setState({error:error.message})
            }).finally(()=> {
                this.setState({isLoading: false});
            })
        // axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
        //     console.log(res.data);
        // }).catch(error => {
        //     console.log('error', error);
        // })

        // fetch('https://jsonplaceholder.typicode.com/albums').then((res => 
        //     res.json())).then((data) => {
        //         console.log(data);
        //     }).catch(err => {
        //         console.log(err);
        //     })

    }

    render () {
        const {products, isLoading, error, product} = this.state
        return (
            <Wrapper products={products} isLoading = {isLoading} product={product} error={error} history = {this.props?.history ?? {}}/>
        )
     }
        
    
  }
}

export default HttpHoc;