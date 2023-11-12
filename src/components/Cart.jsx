// import React, { useState, useEffect } from 'react'
// import { useCart } from '../CartContext';

// function Cart() {

//     const { getCart, removeFromCart, addToCart  , decrease} = useCart();
//     const [cart, setCart] = useState(getCart())

//     useEffect(() => {
//         // Update the cart when it changes
//         setCart(getCart());
//       }, [getCart]);

//     return (
//         <>
//             <div className="container " style={{ marginTop: '80px' }}>
//                 {
//                     cart && cart.map(item => (
//                             <div key={item.id}>
//                                 <h2>{item.name}<small>({item.price})</small></h2>
//                                 <p>Quantity: {item.count}</p>
//                                 <div>
//                                     {item.price * item.count}
//                                 </div>
//                                 <button onClick={() => {
//                                     removeFromCart(item.id)
//                                     setCart([...cart.filter(i => i !== item)]);
//                                     // setTotal(total+0)
//                                 }}>Remove</button>
//                                 <button onClick={() => {
//                                     addToCart(item.id)

//                                 }}>+1</button>
//                                 {
//                                     item.count > 1 ?
//                                     <button onClick={() => {
//                                         decrease(item.id)

//                                     }}>-1</button>
//                                     : ''
//                                 }

//                             </div>
//                     )
//                     )
//                 }


//             </div>
//             Total: {cart.reduce((acc, item) => acc + item.price * item.count, 0)}

//         </>
//     )



// }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../style/Cart.css'; // Import your CSS file
import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';

function Cart() {
    const { getCart, removeFromCart, addToCart, decrease } = useCart();
    const [cart, setCart] = useState(getCart());

    useEffect(() => {
        // Update the cart when it changes
        setCart(getCart());
    }, [getCart]);

    return (
        <div className="container " style={{ margin: '100px auto' }}>
            <div className="cart-container">
                {cart.length > 0 ? (<h1 className="cart-title">Your Shopping Cart</h1>) : ''}
                
                {cart.length > 0 ? (
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="product-name">{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>{item.count}</td>
                                    <td>${item.price * item.count}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                removeFromCart(item.id);
                                                setCart([...cart.filter((i) => i !== item)]);
                                            }}
                                            className="remove-button btn btn-danger"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <button onClick={() => addToCart(item.id)} className="action-button">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                        {item.count > 1 && (
                                            <button onClick={() => decrease(item.id)} className="action-button">
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="empty-cart-message">
                        Your shopping cart is empty. Add some items to your cart!
                    </div>
                )}
                {cart.length > 0 && (
                    <div className="container">
                        <div className="cart-total" style={{ float: 'right', fontWeight: '900' }}>
                            Total: ${cart.reduce((acc, item) => acc + item.price * item.count, 0)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
