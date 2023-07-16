import React from 'react'
import { Box, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'

interface PredictionsTableProps {
    predictions: any;
    selectedModel: string;
}

const PredictionsTable: React.FC<PredictionsTableProps> = ({
    predictions,
    selectedModel
}) => {
  return (
    <Box className="predictions-container" mt="20px" border="1px solid #e2e8f0" borderRadius={6} maxW="500px">
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>Class Name</Th>
          <Th>Probability</Th>
        </Tr>
      </Thead>
      <Tbody>
        {selectedModel === 'mobilenet' ? (
        predictions.map((prediction: any, index : any) => (
          <Tr key={index}>
            <Td>
              <Text fontSize="md">{prediction.className}</Text>
            </Td>
            <Td>
              <Text fontSize="md">{Math.round(prediction.probability * 100)}%</Text>
            </Td>
          </Tr>
        )) ) : (
          predictions.map((prediction: any, index : any) => (
            <Tr key={index}>
              <Td>
                <Text fontSize="md">{prediction.class}</Text>
              </Td>
              <Td>
                <Text fontSize="md">{Math.round(prediction.score * 100)}%</Text>
              </Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
  </Box>
  )
}

export default PredictionsTable