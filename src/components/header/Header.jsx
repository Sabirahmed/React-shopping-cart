
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = (props) => {
  return (
    <header>
        <Link to='/login'>Login | </Link>
        <Link to='/register'>Register  | </Link>
        <Link to='/products'>Products  | </Link>
        <Link to='/cart'>Cart ({props?.cart?.length ?? 0}) </Link>

    </header>
  )  

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cart: state.cart.cartList,
        isLoading: state.cart.isLoading
    }
}

export default connect(mapStateToProps, null)(Header);