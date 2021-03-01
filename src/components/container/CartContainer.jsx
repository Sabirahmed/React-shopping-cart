
import * as cartActions from '../../redux/actions/cartActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Cart from '../cart/Cart';

const mapStateToProps = (state) => {
    console.log("in cart:", state);
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        //actions:dispatch(cartActions);
        actions:bindActionCreators(cartActions, dispatch)
    }

}
 
let CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartContainer;