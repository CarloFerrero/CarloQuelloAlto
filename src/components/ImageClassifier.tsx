import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import {
  Box,
  Button,
  Image as ChakraImage,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Skeleton,
} from '@chakra-ui/react';
import { AiOutlinePicture } from 'react-icons/ai';

import UploadImage from './UploadImage';

const ImageClassifier: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<{ className: string; probability: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePredict = async () => {
    if (!file) return;

    setIsLoading(true);

    const img = new Image();
    img.src = URL.createObjectURL(file);

    try {
      // @ts-ignore
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      setPredictions(predictions);
    } catch (error) {
      console.error('Error classifying image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    tf.setBackend('webgl').then(() => {
      console.log('WebGL backend loaded');
    });
  }, []);

  return (
    <Box p={4} maxWidth="500px" mx="auto">
      <Box className="dog-image" display="flex" justifyContent="center" mb={6}>
        <ChakraImage
          src={file ? URL.createObjectURL(file) : 'https://via.placeholder.com/500'}
          alt="dog"
          width="500px"
          height="500px"
          objectFit="cover"
          borderRadius="md"
        />
      </Box>

      <Box className="upload-container" display="flex" gap={6} flexDirection="column" maxW="500px">
        <UploadImage onFileChange={(files) => setFile(files[0])} />
        <Button
          onClick={handlePredict}
          isLoading={isLoading}
          loadingText="Predicting..."
          w="100%"
          variant="solid"
          background="blackAlpha.900"
          color="white"
          size="lg"
          leftIcon={<AiOutlinePicture />}
          _hover={{
            background: 'blackAlpha.700',
            color: 'white',
          }}
        >
          {isLoading ? 'Predicting...' : 'Predict'}
        </Button>
      </Box>
      {predictions.length > 0 ? (
        <Box className="predictions-container" mt="20px" border="1px solid #e2e8f0" borderRadius={6} maxW="500px">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Class Name</Th>
                <Th>Probability</Th>
              </Tr>
            </Thead>
            <Tbody>
              {predictions.map((prediction, index) => (
                <Tr key={index}>
                  <Td>
                    <Text fontSize="md">{prediction.className}</Text>
                  </Td>
                  <Td>
                    <Text fontSize="md">{Math.round(prediction.probability * 100)}%</Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ) : isLoading ? (
        <Box className="predictions-container" mt="20px" border="1px solid #e2e8f0" borderRadius="10px" maxW="500px">
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
      ) : null}
    </Box>
  );
};

export default ImageClassifier;
