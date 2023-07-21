import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

import {
  Box,
  Button,
  Image as ChakraImage,
  Container,
  Flex,
  Heading,
  Select,
  Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { AiOutlinePicture } from 'react-icons/ai';
import ImageWithBoundingBoxes from '../components/imageBoundingBox';
import PredictionsTable from '../components/predictionsTable';
import TableSkeleton from '../components/tableSkeleton';
import UploadImage from '../components/uploadImage';
import { getCurrentProject } from '../utils/currentProjext';
import { useLocation } from 'react-router-dom';

const ImageClassifier: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'mobilenet' | 'coco-ssd'>('coco-ssd');
  let location = useLocation();
  const currentProject = getCurrentProject(location);

  const handlePredict = async () => {
    if (!file) return;

    setIsLoading(true);

    const img = new Image();
    img.src = URL.createObjectURL(file);

    try {
      let model;
      let predictions
      if (selectedModel === 'mobilenet') {
        // @ts-ignore
        model = await mobilenet.load();
        predictions = await model.classify(img);
      } else {
        // @ts-ignore
        model = await cocoSsd.load();
        predictions = await model.detect(img);
        console.log(predictions)
      }
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

  useEffect(() => {
    setPredictions([]);
  }, [selectedModel]);

  return (
    <Container maxW="1200px" mt="30px">
    <Box maxW="650px" mb="30px">
      <Heading fontWeight="light">{currentProject?.title}</Heading>
      <Text mt="10px">{currentProject?.description}</Text>
    </Box>
    <Flex flexDirection="column" alignItems="flex-start" w="100%">
      <Box w="100%" minW="300px">
      <Select
        placeholder="Select a model"
        mb={6}
        onChange={(e) => {
          setSelectedModel(e.target.value as 'mobilenet' | 'coco-ssd');
        }}
      >
        <option value="mobilenet">MobileNet</option>
        <option value="coco-ssd">CocoSsd</option>
      </Select>

      <Box className="upload-container" display="flex" gap={6} mb={6} flexDirection="column" w="100%">
        <UploadImage onFileChange={(files) => setFile(files[0])} />
      </Box>

      <Box className="dog-image" display="flex" justifyContent="center" mb={0}>
          {file ? (
            <ImageWithBoundingBoxes imageSrc={URL.createObjectURL(file)} predictions={predictions} />
          ) : null}
      </Box>


      <Box className="upload-container" display="flex" gap={6} flexDirection="column" w="100%">
        {file ? <Button
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
        </Button> : 
        <Button
        onClick={handlePredict}
        isLoading={isLoading}
        loadingText="Predicting..."
        w="100%"
        disabled
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
      </Button>}
      </Box>

      </Box>
      <Box w="100%" mt={2}>
      {predictions.length > 0 ? (
      <PredictionsTable 
        predictions={predictions}
        selectedModel={selectedModel}
      />
      ) : isLoading ? (
       <TableSkeleton />
      ) : null}
      </Box>
    </Flex>  
    </Container>
  );
};

export default ImageClassifier;
