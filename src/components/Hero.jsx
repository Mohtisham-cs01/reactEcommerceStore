// import React from 'react'

// function Hero() {
//     return (
//         <section className="py-5 text-center container">
//             <div className="row py-lg-5">
//                 <div className="col-lg-6 col-md-8 mx-auto">
//                     <h1 className="fw-light">Album Example</h1>
//                     <p className="lead text-body-secondary">
//                         A brief description of the album below (its contents, creator, etc.). Make it short and sweet, but not too short so people don't miss out on this album entirely.</p>
//                     <p>
//                         <a href="#" className="btn btn-primary m-2">Primary Work Invitation</a>
//                         <a href="#" className="btn btn-secondary m-2">Secondary Work</a>
//                     </p>

//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero


import React from 'react';

function Hero() {
  return (
    <section className="hero-section py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="hero-title">Welcome to Our Album</h1>
          <p className="hero-description">
            Discover the magic of music with our latest album. Join us on this musical journey and explore a world of melodies.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary m-2">Get Started</a>
            <a href="#" className="btn btn-secondary m-2">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
