import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import ImageClassifier from "./components/ImageClassifier"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" >
        <VStack spacing={8}>
          <ImageClassifier />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
