// import React, { useEffect, useState } from 'react';
// import ProductData from '../data'; // Import your product data
// import ProductCard from './ProductCard';

// function Shop() {
//     const [products, setProducts] = useState(ProductData); // Initialize products with your data
  

//     return (
//         <>
//             <h1 className="text-center">Shop</h1>
//             <div className="container mt-5 d-flex">
//                 <div className="row">
//                     {products &&
//                         products.map((product) => (
//                             <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
//                                 <ProductCard product={product} />
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Shop;


import { toast } from 'react-toastify';
import '../style/Shop.css'; // Import your CSS file
import React, { useEffect, useState } from 'react';
import ProductData from '../data'; // Import your product data
import ProductCard from './ProductCard';

function Shop() {
  const [products, setProducts] = useState(ProductData);

  return (
    <div className="container shop-container">
      <h1 className="text-center mt-5 text-primary">Shop</h1>
      <div className="row">
        {products &&
          products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shop;
