// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { GlobalStyle } from '../GlobalStyles';
import { Container, Title } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const { contacts } = useSelector(state => state.contacts);

  return (
    <Container>
      <GlobalStyle />
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts && <ContactList />}
    </Container>
  );
};
