import PropTypes from 'prop-types';
import { Contacts } from './Contacts';
import css from './Contactlist.module.css'

export const ContactList = ({ contacts, filterName, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={css.contacts__box}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contacts
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  filterName: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
