import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Contacts.module.css';

export class ContactListItem extends Component {
  render() {
    const { name, number, deleteContact, id } = this.props;

    return (
      <li className="contacts__item">
        {name}: {number}
        <button
          type="button"
          onClick={() => deleteContact(id)}
          className={css.button}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
