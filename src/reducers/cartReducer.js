const cartReducer = (state, action) => {
    // action.type
    // action.data
    switch(action.type){
        case 'ADD_TO_CART': {
            const existingItem = state.cart.find(product => product.id === action.data.id);
            let updateItem;
            let updateCart = state.cart;
            if(existingItem){
                updateItem = {...existingItem, quantity: existingItem.quantity + 1};
                let indexOfProduct = state.cart.findIndex(product => product.id === action.data.id);
                updateCart[indexOfProduct] = updateItem;

            }else{
                updateItem = {...action.data, quantity: 1};
                updateCart = [...updateCart, {...updateItem}]
            }
            return {cart: updateCart}
        }

        case 'REMOVE_FROM_CART':
            return {cart: state.cart.filter(product => product.id !== action.data.id)}

        case 'EMPTY_CART':
            return {cart: []};
        default:
            return state;
    }

}

export default cartReducer;