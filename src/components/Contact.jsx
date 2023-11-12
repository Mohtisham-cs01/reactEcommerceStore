import '../style/contact.css'; // Import your CSS file
import React from 'react';
// import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faPhone,
  faPaperPlane,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Contact Us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="contact-wrapper">
              {/* Contact Information */}
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="contact-box text-center">
                    <div className="icon">
                      <FontAwesomeIcon icon={faMapMarker} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-box text-center">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Phone:</span> <a href="tel://1234567920">+1235 2355 98</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-box text-center">
                    <div className="icon">
                      <FontAwesomeIcon icon={faPaperPlane} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Email:</span>{' '}
                        <a href="/cdn-cgi/l/email-protection#0c65626a634c7563797e7f657869226f6361">
                          <span className="__cf_email__" data-cfemail="355c5b535a754c5a4047465c41501b56">
                            [email protected]
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="contact-box text-center">
                    <div className="icon">
                      <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className="text">
                      <p>
                        <span>Website</span> <a href="#">yoursite.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="row no-gutters">
                <div className="col-md-7">
                  <div className="contact-wrap p-md-5 p-4">
                    <h3 className="mb-4">Get in Touch</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent successfully. Thank you!
                    </div>
                    <form onSubmit={(e)=>{e.preventDefault()}} method="POST" id="contactForm" name="contactForm" className="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="name">
                              Full Name
                            </label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Email Address
                            </label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Subject
                            </label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="message">
                              Message
                            </label>
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary" />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap p-5 img">
                    {/* Additional information */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
