import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    this.setState(
      e.currentTarget.type === 'text'
        ? {
            name: e.target.value,
          }
        : {
            number: e.target.value,
          }
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    let contacts = this.state.contacts;
    this.setState({
      contacts: [
        ...contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
    });
  };
  deletePerson = e => {
    this.state.contacts.map(contact => {
      if (contact.id === e.target.id) {
        let index = this.state.contacts.indexOf(contact);
        let cloneOfContacts = [...this.state.contacts];
        cloneOfContacts.splice(index, 1);
        this.setState({ contacts: cloneOfContacts });
      }
    });
  };
  filterFnc = (e) => {
    let b = [...this.state.contacts].map(contact => {
      
      let arr = [];
      if (contact.name.toUpperCase().includes(e.target.value.toUpperCase())) {
        arr.push({ contact });
      } else {
        return null
      }
     
    })
    
   
    // this.setState({contacts:b})
    }
 
  render() {
    
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filterFnc={this.filterFnc } />
        <ContactList
          deleteFnc={this.deletePerson}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}
