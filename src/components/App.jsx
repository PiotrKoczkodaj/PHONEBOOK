import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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
this.setState((prevState)=>{prevState.contacts.push({name:'FARR'})})

  }

  render() {
    console.log(this.state)
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
        <ContactForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}
