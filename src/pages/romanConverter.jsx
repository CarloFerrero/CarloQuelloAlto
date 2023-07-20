import { Box, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import CodePreview from "../components/codePreview";
import ModalComponent from "../components/modal";
import { getCurrentProject } from "../utils/currentProjext";
import { romanConverter } from "../script/roman_converter";
import { useLocation } from "react-router";

const codesnippet = `const romanConverter = (roman) => {
  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = ROMAN[roman[i]];
    const next = ROMAN[roman[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};`;

const RomanConverter = () => {
  const [val, setVal] = useState("");
  const [res, setRes] = useState();
  let location = useLocation();
  const currentProject = getCurrentProject(location);

  const handleSubmit = (e) => {
    let res = romanConverter(val);
    setRes(res);

    e.preventDefault();
  };

  return (
    <Container maxW="1200px" mt="30px">
      <Box maxW="650px">
        <Heading fontWeight="light">{currentProject.title}</Heading>
        <Text mt="10px">{currentProject.description}</Text>
      </Box>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex gap="10px" mt="20px" mb="30px">
          <Input
            placeholder="Inser a valid roman number ex: XXI"
            type="text"
            onChange={(e) => setVal(e.target.value)}
          />
          <ModalComponent
            header={`The Roman number ${val}, is equal to:`}
            body={res}
            action="close"
            openButton="Convert"
          />
        </Flex>
        <CodePreview code={codesnippet} language="Javascript" />
      </form>
    </Container>
  );
};

export default RomanConverter;
