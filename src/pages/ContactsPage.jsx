import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/List/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Container, Section } from 'components/Navigation/Navigation.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Div } from './pages.styled/Pages.styled';

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  return (
    <Section>
      <Container>
        <Div>
          {loading && <Loader />}
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Div>
      </Container>
    </Section>
  );
};

export default ContactsPage;
