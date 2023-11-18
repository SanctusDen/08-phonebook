import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/List/ContactList';
import { Loader } from 'components/Loader/Loader';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

const FormContainer = () => {
  const loading = useSelector(selectIsLoading);

  return (
    <FormContainer>
      {loading && <Loader />}
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </FormContainer>
  );
};

export default FormContainer;
