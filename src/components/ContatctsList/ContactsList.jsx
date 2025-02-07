import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectError, selectIsLoading, selectIsLoggedIn } from '../../redux/selectors';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import ContactsItem from '../ContactsItem/ContactsItem';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';


const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn:', isLoggedIn)
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { items } = useSelector(getContacts);

  return (
    <ContactListWrap>
      {isLoading && 'Is Loading ...'}
      {items && !isLoading && (
        <PhonebookList>
          {filteredContacts.map(contact => (
            <PhonebookItem key={contact.id}>
              <ContactsItem contact={contact}></ContactsItem>
            </PhonebookItem>
          ))}
        </PhonebookList>
      )}
      {error && <b>{error}</b>}
    </ContactListWrap>
  );
};

export default ContactList;
