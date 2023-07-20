import { Box, Button, Container, HStack, Select } from "@chakra-ui/react";

import React from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import SearcBar from "./searchBar";
import { tags } from "../utils/tags";

const Filter = ({ setSearch, setTag }) => {
  const callBackFunc = (option) => {
    setTag(option);
  };

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Container maxW="1200px">
        <HStack spacing="10px" mt="20px" mb="20px">
          <Box alignItems="center" width="100%">
            <SearcBar
              handleChange={handleChange}
              placeholder="Search anything"
              color="#000"
            />
          </Box>

          <Box alignItems="center" width="100%">
            <Select onChange={(e) => callBackFunc(e.target.value)}>
              <option>Newest</option>
              <option>Oldest</option>
            </Select>
          </Box>

          <Box alignItems="center" width="100%">
            <Select onChange={(e) => callBackFunc(e.target.value)}>
            {
                tags.map((tag, i) => (
                  <option key={i}>{tag}</option>
                ))
              }
            </Select>
          </Box>
          <Button variant="outline" onClick={() => callBackFunc("Refresh")}>
            <RepeatIcon />
          </Button>
        </HStack>
      </Container>
    </div>
  );
};

export default Filter;
