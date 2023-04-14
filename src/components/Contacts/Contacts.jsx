import React, { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { name, number, deleteContact, id } = this.props;

    return (
      <li className="contacts__item">
        {name}: {number}
        <button type="button" onClick={deleteContact} name={id}>
          Delete
        </button>
      </li>
    );
  }
}
