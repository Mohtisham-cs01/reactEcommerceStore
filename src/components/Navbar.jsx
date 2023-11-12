// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { useCart } from '../CartContext';

// function Navbar() {
//   const { getCart , clearCart } = useCart();
//   return (
//     <>
//       <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">Carousel</Link>
//           <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="navbar-collapse collapse" id="navbarCollapse" style={{}}>
//             <ul className="navbar-nav me-auto mb-2 mb-md-0">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/contact" className='nav-link'>Contact</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/shop" className='nav-link'>Shop</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/cart" className='nav-link'>Cart({getCart().length})</Link>
//               </li>
//             </ul>
//             <form className="d-flex" role="search" onSubmit={(e)=>{e.preventDefault()}}>
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" >Search</button>
//               <button className="btn btn-success mx-2" onClick={() => { clearCart() }}>Clear</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       {/* <Outlet /> */}
//     </>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const { getCart, clearCart } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Carousel
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" activeClassName="active">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link" activeClassName="active">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" activeClassName="active">
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart ({getCart().length})
                </NavLink>
              </li>
            </ul>
            <form className="d-flex align-items-center" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control  me-2" style={{ margin: 'auto 6px' }} type="search" placeholder="Search" aria-label="Search" />
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-success">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
                <button className="btn btn-success mx-2" onClick={() => clearCart()}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faTrash} />
                    <span className="ms-2">Clear</span>
                  </div>
                </button>
              </div>
            </form>


          </div>
        </div>
      </nav>
      <div className="navbar-height-div" style={{ height: '66px' }}></div>
    </>
  );
}

export default Navbar;
