import React from 'react'

function Feature({direction}) {
    const classNames = `row featurette d-flex align-items-center justify-content-center ${
        direction === 'reverse' ? 'flex-row-reverse' : ''
      }`;
    return (
        <div className={classNames}>
            <div className="col-md-7 text-center">
                <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
                <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 " style={{ width: '20%' }}>
                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={250} height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
            </div>
        </div>
    )
}

export default Feature