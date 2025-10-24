import React from 'react';
import ContactItem from './ContactItem';
import './ContactList.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  if (contacts.length === 0) {
    return (
      <div className="contact-list">
        <div className="no-contacts">
          <svg className="no-contacts-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <h3>No contacts found</h3>
          <p>Try adjusting your search or add a new contact</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <h2>Contacts ({contacts.length})</h2>
      </div>
      <div className="contact-items">
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
