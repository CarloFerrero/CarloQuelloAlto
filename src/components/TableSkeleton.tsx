import { Box, Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'

import React from 'react'

const TableSkeleton = () => {
  return (
    <Box className="predictions-container" border="1px solid #e2e8f0" borderRadius="10px" w="100%"  mt={2}>
    <Table variant="striped" colorScheme="gray">
      <Thead>
        <Tr>
          <Th>
            <Skeleton height="20px" width="100px" />
          </Th>
          <Th>
            <Skeleton height="20px" width="100px" />
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {[1, 2, 3].map((index) => (
          <Tr key={index}>
            <Td>
              <Skeleton height="20px" width="100px" />
            </Td>
            <Td>
              <Skeleton height="20px" width="100px" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
  )
}

export default TableSkeleton