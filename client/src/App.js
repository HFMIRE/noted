import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import NotesHomepage from './components/NotesHomepage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
       <NotesHomepage/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
