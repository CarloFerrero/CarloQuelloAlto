/* eslint-disable no-useless-escape */
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import CodePreview from "../components/codePreview";
import { getCurrentProject } from "../utils/currentProjext";
import { useLocation } from "react-router-dom";

const codesnippet = `function decodeMorse(morseCode) {
  let morse = morseCode.trim().split(" ");
  let encoded = [];

  for (let i = 0; i < morse.length; i++) {
    if (morse[i] === "") {
      encoded.push(" ");
    } else {
      encoded.push(MORSE_CODE[morse[i]]);
    }
  }
  return encoded.join("").replace(/ {2}/g, " ");
}`;

const DecodeMorse = () => {
  let location = useLocation();
  const currentProject = getCurrentProject(location);
  return (
    <Container maxW="1200px" mt="30px">
      <Box maxW="650px" mb="30px">
        <Heading fontWeight="light">{currentProject.title}</Heading>
        <Text mt="10px">{currentProject.description}</Text>
      </Box>
      <CodePreview code={codesnippet} language="Javascript" />
    </Container>
  );
};

export default DecodeMorse;
