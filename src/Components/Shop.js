import './Shop.css';
import { useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const initialState = {cart: []};

const products = [{
    id: 1,
    productName: 'IPhone 14 Pro',
    category: 'Mobile',
    price: '139999'
},
{
    id: 2,
    productName: 'IPhone 14',
    category: 'Mobile',
    price: '79999'
},
{
    id: 3,
    productName: 'OnePlus Nord 2',
    category: 'Mobile',
    price: '50000'
},
];

const Shop = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
       <div>
            <div>
                <h2>Products</h2>
                <div className='products-container'>
                    {products.map((product, index) => (
                        <div key={index} className="product">
                            <h4>{product.productName}</h4>
                            <h4>₹ {product.price}</h4>
                            <h4>{product.category}</h4>
                            <button onClick={() => dispatch({type: "ADD_TO_CART", data: product})}>Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2>Cart</h2>
                {state.cart.length ? <button  onClick={() => dispatch({type: "EMPTY_CART"})}>Empty your cart</button> : <></>}
                <div className='products-container'>
                    {state.cart.length ? state.cart.map((product, index) => (
                        <div key={index} className="product">
                            <h4>{product.productName}</h4>
                            <h4>₹ {product.price}</h4>
                            <h4>{product.category}</h4>
                            <h4>Quantity: {product.quantity}</h4>
                            <button onClick={() => dispatch({type: "REMOVE_FROM_CART", data: product})}>Remove from Cart</button>
                        </div>
                    )) : <div><h3>Cart is Empty</h3></div>}
                </div> 
            </div>
       </div>
    )
}

export default Shop;