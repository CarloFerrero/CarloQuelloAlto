import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import ImageClassifier from "./components/ImageClassifier";
import LeftSidebar from "./components/LeftSidebar";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" templateColumns={{sm: "1fr", md: "300px 3fr"}}>
          <LeftSidebar />
          <VStack spacing={8} align="flex-start">
            <ImageClassifier />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
