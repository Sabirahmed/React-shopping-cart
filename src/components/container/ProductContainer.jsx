
import * as cartActions from '../../redux/actions/cartActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Products from '../products/Products';
import HttpHoc from '../hoc/HttpHoc';

const mapDispatchToProps = (dispatch) => {

    return {
        //actions:dispatch(cartActions);
        actions:bindActionCreators(cartActions, dispatch)
    }

}



let ProductContainer = HttpHoc(connect(null, mapDispatchToProps)(Products), {url:'albums'});
export default ProductContainer;