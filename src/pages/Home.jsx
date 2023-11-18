import { Box, AbsoluteCenter, Text, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { Button } from './pages.styled/Pages.styled';

const Home = () => {
  return (
    <AbsoluteCenter gap={2}>
      <Box>
        <Text fontSize="30px" color="#ffb202">
          Your All-in-One Contact Management App
        </Text>
        <Text fontSize="22px" color="white" width={700}>
          Welcome to Phonebook, your ultimate solution for organizing, saving,
          editing, and effortlessly managing all your contacts in one convenient
          place. Say goodbye to the chaos of scattered contacts and say hello to
          streamlined communication and effortless accessibility.
        </Text>
      </Box>

      <ButtonGroup gap={2}>
        <>
          <Button>Register</Button>
          <Button>login</Button>
        </>
      </ButtonGroup>
    </AbsoluteCenter>
  );
};

export default Home;
