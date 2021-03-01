import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_LOADER } from "../actions/actionTypes";

const initialState = {
    cartList: [],
    isLoading: false
}

const cartReducer = (state = initialState, action={}) => {
    
    switch(action?.type) {

        case SET_LOADER:
            return {...state, isLoading:action.payload}
        case ADD_TO_CART: 
            // let updatedState = {...state, cartList: [...state.cartList, action.payload]};
            //console.log(action.payload.id);
            // if (state.cartList.length>0) {
            //     (state.cartList.forEach(element => {
            //         console.log('counter')
            //         if(element.id===action.payload.id){
            //             console.log("found");
            //             alert('Product item is already added in the cart');
            //             return initialState
            //         }else {
            //             return {...state, cartList: [...state.cartList, action.payload]};
            //         }
                    
            //     }))
            
            // }else {
            //     return {...state, cartList: [...state.cartList, action.payload]};
            // }
            
            
            return {...state, cartList: [...state.cartList, action.payload]};
            
        case REMOVE_FROM_CART: 
            //let updatedState1 = {...state, cartList: state.cartList.filter((item)=> item.id !== action.id)};

            return {...state, cartList: state.cartList.filter((item)=> item.id !== action.id)};


        case CLEAR_CART:

            return initialState;

        default: return state;

    }

}

export default cartReducer;