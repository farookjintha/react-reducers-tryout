
import '../styles/Shop.css';
import { useDispatch, useSelector } from "react-redux";
import { addToCart ,emptyCart, removeFromCart } from "../store/actions/cart.actions";

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
    const dispatch = useDispatch();
    var cart = useSelector((store) => store.cart);

    return (
        <div>
            <h1> Shop </h1>
            <h3>Products</h3>

            <div className="products-container">
                {products.map((product, index)  => (
                    <div key={index} className="product">
                        <h4>{product.productName}</h4>
                        <h4>₹ {product.price}</h4>
                        <h4>{product.category}</h4>
                        <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
                    </div>
                ))}
            </div>
            <h3>Cart Details</h3>
            {cart.length ? <button  onClick={() => dispatch(emptyCart())}>Empty your cart</button> : <></>}
            <div className="products-container">
                {cart.length ? cart.map((product, index)  => (
                        <div key={index} className="product">
                            <h4>{product.productName}</h4>
                            <h4>₹ {product.price}</h4>
                            <h4>{product.category}</h4>
                            <h4>Quantity: {product.quantity}</h4>
                            <button  onClick={() => dispatch(removeFromCart(product))}>Remove From Cart</button>
                        </div>
                        )) : 
                        <div>
                            <h3>Cart is empty</h3>
                        </div>
                        }
            </div>
        </div>
        

    )
}

export default Shop;