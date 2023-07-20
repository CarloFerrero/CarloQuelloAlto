import { Box, Text } from '@chakra-ui/react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import React, { FC, useCallback } from 'react';

import { FiCamera } from "react-icons/fi"

interface UploadImageProps {
  onFileChange: (files: FileWithPath[]) => void;
}

const UploadImage: FC<UploadImageProps> = ({ onFileChange }) => {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    if (onFileChange) {
      onFileChange(acceptedFiles);
    }
  }, [onFileChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
    <Box
      {...getRootProps()}
      border="1px dashed"
      borderColor="blackAlpha.300"
      borderRadius="lg"
      p={4}
      textAlign="center"
      cursor="pointer"
      bg="gray.100"
      color="blackAlpha.900"
      transition="all .2s ease-in-out"
      _hover={{
        color: 'gray.600',
        borderColor: 'gray.600',
      }}
      w="100%"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="3px">
          <FiCamera color="black" />
          <Text fontSize="md">Drop a photo here...</Text>
        </Box>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="3px">
          <FiCamera color="black" />
          <Text fontSize="md">Upload or take a photo</Text>
        </Box>
      )}
    </Box>
    </>
  );
};

export default UploadImage;
