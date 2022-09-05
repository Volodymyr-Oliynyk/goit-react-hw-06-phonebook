import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container } from 'components/common/Container';
import { Title } from 'components/common/TitleStyled';

export default function App() {
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
