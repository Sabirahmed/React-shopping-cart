
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as cartActions from '../../redux/actions/cartActions';
import ProductDetails from '../products/productDetails/ProductDetails';
import HttpHoc from '../hoc/HttpHoc';

const mapDispatchToProps = (dispatch) => {

    return {
        
        actions:bindActionCreators(cartActions, dispatch)
    }

}




 let ProductDetailContainer = HttpHoc(connect(null, mapDispatchToProps)(ProductDetails), {url:'albums', isDetailPage: true});

 export default ProductDetailContainer;