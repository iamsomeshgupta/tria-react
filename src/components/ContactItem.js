import React, { useState } from 'react';
import './ContactItem.css';

const ContactItem = ({ contact, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(contact.id);
    setShowDeleteConfirm(false);
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contact.phone}`;
  };

  return (
    <div className="contact-item">
      <div className="contact-avatar">
        {contact.name.charAt(0).toUpperCase()}
      </div>
      
      <div className="contact-info">
        <h3 className="contact-name">{contact.name}</h3>
        <div className="contact-details">
          <div className="contact-detail" onClick={handleEmailClick}>
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>{contact.email}</span>
          </div>
          <div className="contact-detail" onClick={handlePhoneClick}>
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>{contact.phone}</span>
          </div>
        </div>
      </div>

      <div className="contact-actions">
        {!showDeleteConfirm ? (
          <button
            className="delete-btn"
            onClick={() => setShowDeleteConfirm(true)}
            title="Delete contact"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="3,6 5,6 21,6"></polyline>
              <path d="M19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        ) : (
          <div className="delete-confirm">
            <button className="confirm-delete" onClick={handleDelete}>
              ✓
            </button>
            <button className="cancel-delete" onClick={() => setShowDeleteConfirm(false)}>
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactItem;
