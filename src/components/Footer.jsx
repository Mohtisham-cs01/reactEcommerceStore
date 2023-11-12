import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at justo in ex suscipit iaculis. Proin rhoncus
              euismod urna, vel hendrerit libero ultricies in.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <address>
              <p>198 West 21th Street, Suite 721</p>
              <p>New York, NY 10016</p>
              <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
              <p>Phone: <a href="tel:+1235235598">+1 235-235-98</a></p>
            </address>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto" >
              <p>&copy; 2023 Your Company. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
