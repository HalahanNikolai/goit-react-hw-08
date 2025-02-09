import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContatctsList/ContactsList';

const Contacts = () => {
  return (
    <Section title="Phonebook">
      <ContactForm ></ContactForm>
      <h2 style={{
        margin: '0 auto',
        padding: '20px 0',
        textAlign: 'center',
      }}>Contacts</h2>
      <Filter></Filter>
      <ContactList className=''></ContactList>
    </Section>
  );
};

export default Contacts;
