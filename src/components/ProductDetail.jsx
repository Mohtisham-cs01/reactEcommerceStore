// import React from "react"
// import {useParams} from "react-router-dom"
// import productsData from '../data.js'

// function ProductDetail() {
//     const { id } = useParams()
//     console.log(id)
//     const productId = parseInt(id, 10); 
//     const thisProduct = productsData.find(prod => prod.id === productId)
    
//     return (
//         <div>
//             <h1>{thisProduct.name}</h1>
//             <p>Price: ${thisProduct.price}</p>
//             <p>{thisProduct.description}</p>
//         </div>
//     )
// }

// export default ProductDetail



import '../style/ProductDetail.css'
import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from '../data.js';
import { useCart } from '../CartContext';


function ProductDetail() {
    const { id } = useParams();
    const productId = parseInt(id, 10);
    const thisProduct = productsData.find(prod => prod.id === productId);
    const {addToCart } = useCart();

    if (!thisProduct) {
        return (
            <div className="not-found">
                Product not found. <Link to="/products">Back to products</Link>
            </div>
        );
    }

    return (
        <>
        <div className="product-detail " style={{margin : '100px , auto'}}>
            <div className="product-image" style={{height:'300px'}}>
                <img src={'https://picsum.photos/300/300?random=1'} alt={thisProduct.name} />
            </div>
            <div className="product-info">
                <h1 className="product-name">{thisProduct.name}</h1>
                <p className="product-description">{thisProduct.description}</p>
                <p className="product-price">${thisProduct.price}</p>
                <button className="back-button">
                    <Link style={{color : 'white' , textDecoration : 'none'}} to="/shop">Back</Link>
                </button>
                <button onClick={()=>{addToCart(thisProduct.id)}} className="custom-button " style={{margin : 'auto 3px'}}>
                    Add To Cart
                </button>
            </div>
        </div>
        <div style={{margin : '50px'}}>
        </div>
        </>
    );
}

export default ProductDetail;
