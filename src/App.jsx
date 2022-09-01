import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container } from 'components/common/Container';
import { Title } from 'components/common/TitleStyled';
// import { useLocalStorage } from './hooks/useLocalStorage';

// const LOCAL_KEY = 'contacts';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage(LOCAL_KEY, initialContacts);



  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
