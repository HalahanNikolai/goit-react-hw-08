import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectIsLoading } from '../../redux/contacts/selectors';
import { selectError, selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import {
  ContactListWrap,
  PhonebookList,
  PhonebookItem,
} from './ContactsList.styled';
import ContactsItem from '../ContactsItem/ContactsItem';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';


const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('isLoggedIn:', isLoggedIn)
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
