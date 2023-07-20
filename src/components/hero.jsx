import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";

const Hero = ({ title }) => {
  return (
    <Box
      py={{
        base: "4",
        lg: "5",
      }}
      px={{
        base: "4",
        lg: "5",
      }}
      as="section"
      width="100%"
      height="250px"
      display="flex"
      alignItems="center"
    >
      <Container maxW="900px">
        <Heading as="h2" m="0" fontWeight="light" textAlign="center">
          {title}
        </Heading>
      </Container>
    </Box>
  );
};

export default Hero;
