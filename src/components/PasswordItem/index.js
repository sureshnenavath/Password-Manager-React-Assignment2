import React from 'react';
import './index.css';

const PasswordItem = ({ password, onDelete, showPasswords }) => {
  return (
    <li className="password-item" data-testid="password-item">
      <div className="password-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          alt="website"
          className="icon"
        />
        <p>{password.website}</p>
      </div>
      <div className="password-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          alt="username"
          className="icon"
        />
        <p>{password.username}</p>
      </div>
      <div className="password-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          alt="password"
          className="icon"
        />
        <p>
          {showPasswords ? (
            password.password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-icon"
            />
          )}
        </p>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(password.id)}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  );
};

export default PasswordItem;