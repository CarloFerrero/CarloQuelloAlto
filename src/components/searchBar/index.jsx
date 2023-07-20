import React from "react";
import "./search-bar.styles.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearcBar = ({ handleChange, placeholder, color }) => {
  return (
    <InputGroup colorScheme="whiteAlpha" borderRadius="7px" w="100%">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.400" />}
      />
      <Input onChange={handleChange} placeholder={placeholder} />
    </InputGroup>
  );
};

export default SearcBar;
