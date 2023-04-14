import { Contacts } from './Contacts';

export const ContactList = ({ contacts, filterName, deleteContact }) => {
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterName.toLowerCase())
      );
    
      return (
        <ul className="contacts__box">
          {filteredContacts.map(({ id, name, number }) => {
            return <Contacts key={id} name={name} number={number} deleteContact={deleteContact} id={id}/>;
          })}
        </ul>
      );
    };