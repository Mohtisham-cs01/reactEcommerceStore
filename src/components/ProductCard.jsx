// import React, { useContext } from 'react'
// import { useCart } from '../CartContext';

// function ProductCard({ product }) {
  
//     const { addToCart } = useCart();
//     return (
//         <>
//         <div className="card " style={{ width: '18rem' , margin:'5px' }}>
//             {/* <img src="..." className="card-img-top" alt="..." /> */}
//             <div className="card-body">
//                 <h5 className="card-title">{product.name}<small>(${product.price})</small></h5>
//                 <p className="card-text">{product.description}</p>
//                 <button className='btn btn-primary' onClick={() => addToCart(product.id)}>Add to Cart</button>
//             </div>
//         </div>
//         </>
        

//     )
// }

// export default ProductCard


import '../style/ProductCard.css'; // Import your CSS file
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import img from '/loading.jpg'
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  const placeholderImage = `https://picsum.photos/300/200?random=${product.id}`;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const showAlert =(name)=>{
    toast.success(`${name} added to the cart`, {
      position: 'top-right',
      autoClose: 500, // Optional: Auto-close duration
    });
  }

  return (
    <div className="card product-card">
      {isLoading ? (
        <img src={placeholderImage} className="card-img-top" alt={product.name} style={{ display: 'none' }} />
      ) : null}
      <img
        src={placeholderImage}
        className={`card-img-top ${isLoading ? 'hidden' : ''}`}
        alt={product.name}
        onLoad={handleImageLoad}
      />
      <div className="card-body">
        <h5 className="card-title text-primary">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-price text-success">${product.price}</p>
        <Link class="btn btn-outline-primary mx-2" to={`/product/${product.id}`}>Detail</Link>
        <button className="btn btn-primary" onClick={() => {
          showAlert(product.name)
          addToCart(product.id)}
          }>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
