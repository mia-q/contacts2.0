//TO DO:
// add ability to edit contacts
// enforce format for contact information?

import React, { useState } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';
import NewContact from './components/NewContactModal';
import NoContacts from './components/NoContacts';

function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(newContact) {
      setContacts( prevContacts => {
      return [...prevContacts, newContact]
    }); 
  }

  function deleteContact(id) {
    setContacts(prevContacts => {
      return prevContacts.filter((contact, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <div className="main-content"> 
      <div className="msg-and-btn">
        <NewContact addContact={addContact}/>
        <NoContacts hasContacts={contacts.length > 0 ? true : false}/>
        
      </div>
        <div className="contact-list">
        {contacts.map((contact, index) => {
          return (
            <ContactCard
              key={index}
              id = {index}
              imgUrl={contact.imgUrl}
              name={contact.name}
              number={contact.number}
              email={contact.email}
              onDelete={deleteContact}
              className='list-item'
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;