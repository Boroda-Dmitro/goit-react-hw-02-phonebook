import { Component } from 'react';
import { ContactList } from './Contacts/Contactlist';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Tom', number: '153-82-45' },
      { id: 'id-6', name: 'Tina', number: '738-64-91' },
      { id: 'id-7', name: 'Michael', number: '890-44-12' },
      { id: 'id-8', name: 'Megan', number: '276-34-67' },
      { id: 'id-9', name: 'Jane', number: '567-98-11' },
      { id: 'id-10', name: 'John', number: '234-76-88' },
      { id: 'id-11', name: 'John', number: '534-27-39' },
      { id: 'id-12', name: 'Tom', number: '648-90-57' },
      { id: 'id-13', name: 'Jane', number: '789-32-58' },
      { id: 'id-14', name: 'Megan', number: '123-45-67' },
      { id: 'id-15', name: 'Michael', number: '456-78-90' },
    ],
    name: '',
    filter: '',
    number: '',
  };

  handleChange = e => {
    const target = e.target.name;
    this.setState({ [target]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    if (
      contacts.find(contact => {
        return contact.name === name;
      }) !== undefined
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(
      prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }),
      () => {
        console.log(this.state.contacts);
      }
    );
  };

  deleteContact = e => {
    const contactId = e.target.name;
    const contactIndex = this.state.contacts.findIndex(
      contact => contact.id === contactId
    );

    this.state.contacts.splice(contactIndex, 1);

    this.setState(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} />
        <ContactList
          contacts={this.state.contacts}
          filterName={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
