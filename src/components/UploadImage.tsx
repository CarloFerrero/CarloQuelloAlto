import React, { useCallback, FC } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { Box, Text } from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons';
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
        transition={'all .2s ease-in-out'}
        _hover={{
            color: 'gray.600',
            borderColor: 'gray.600',
        }}
        w='100%'
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <>
        <SmallAddIcon w={5} h={5} color="black" />
        <Text fontSize="md">Drop the file here...</Text>
        </>
      ) : (
        <>
        <SmallAddIcon w={5} h={5} color="black" />
        <Text fontSize="md">Drag 'n' drop some files here, or click to select files</Text>
        </>
      )}
    </Box>
  );
};

export default UploadImage;
