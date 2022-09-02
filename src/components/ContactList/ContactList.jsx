import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContact,
  getContactValue,
  getFilterValue,
} from '../../redux/contacts';
// import propTypes from 'prop-types';
import { Button } from 'components/common/ButtonStyled';
import { ContactItem, List } from './ContactListstyled';

const ContactList = () => {
  const contacts = useSelector(getContactValue);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();


  const visibleContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContacts)
    );
  };

  const filteredContacts = visibleContacts();

  const deleteContactItem = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <span>{name}</span> : <span>{number}</span>
          <Button type="button" onClick={() => deleteContactItem(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts: propTypes.arrayOf(
//     propTypes.shape({
//       id: propTypes.string.isRequired,
//       name: propTypes.string.isRequired,
//       number: propTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: propTypes.func.isRequired,
// };
