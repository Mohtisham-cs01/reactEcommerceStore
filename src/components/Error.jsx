import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Error.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <FontAwesomeIcon icon={faQuestionCircle} size="4x" className="not-found-icon" />
        <h1 className="not-found-header">404 - Page Not Found</h1>
        <p className="not-found-text">
          Sorry, the page you are looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="not-found-link">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
