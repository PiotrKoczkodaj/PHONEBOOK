import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, deleteFnc } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}{' '}
              <button id={contact.id} onClick={deleteFnc}>delete</button>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}
