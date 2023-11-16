import { Container, Section } from 'components/Navigation/Navigation.styled';
import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';

const Home = () => {
  return (
    <Section>
      <Container>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Home;
