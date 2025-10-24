import React, { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import AddContact from './components/AddContact';

const initialContacts = [
  { id: 1, name: 'Rohan', email: 'someshgupta@kgpian.iitkgp.ac.in', phone: '9999999999' },
  { id: 2, name: 'Mohan', email: 'someshgupta@kgpian.iitkgp.ac.in', phone: '9999999989' },
  { id: 3, name: 'Micky', email: 'someshgupta@kgpian.iitkgp.ac.in', phone: '9999999979' },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    setContacts(initialContacts);
    setFilteredContacts(initialContacts);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  }, [searchTerm, contacts]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleAddContact = (newContact) => {
    const contact = {
      id: Date.now(), 
      ...newContact
    };
    setContacts(prevContacts => [...prevContacts, contact]);
    setShowAddForm(false);
  };

  const handleDeleteContact = (contactId) => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Tria Contact List</h1>
        <p>Manage your contacts efficiently</p>
      </header>
      
      <main className="app-main">
        <div className="controls">
          <SearchBar onSearch={handleSearch} />
          <button 
            className="add-contact-btn"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            {showAddForm ? 'Cancel' : '+ Add Contact'}
          </button>
        </div>

        {showAddForm && (
          <AddContact onAddContact={handleAddContact} />
        )}

        <ContactList 
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </main>
    </div>
  );
}

export default App;
