import React from "react";
import { VStack, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

const InteractiveDemo = () => {
  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel htmlFor="person-description">Describe the person you want to chat with:</FormLabel>
        <Input id="person-description" placeholder="Enter description here..." />
      </FormControl>
      <Button colorScheme="teal" size="md">
        Start Chat
      </Button>
    </VStack>
  );
};

export default InteractiveDemo;
