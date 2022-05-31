import React from 'react';
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Box,
} from '@chakra-ui/react';
const NotesHomepage = () => {
  return (
    <Box>
      <Editable defaultValue="Hi......" >
        <EditablePreview />
        <EditableInput />
      </Editable>
      <Editable defaultValue="Type something">
        <EditablePreview />
        <EditableTextarea />
      </Editable>
    </Box>
  );
};

export default NotesHomepage;
