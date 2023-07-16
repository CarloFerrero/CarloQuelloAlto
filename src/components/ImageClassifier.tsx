import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import {
  Box,
  Button,
  Image as ChakraImage,
  Select,
  Flex,
} from '@chakra-ui/react';
import { AiOutlinePicture } from 'react-icons/ai';

import UploadImage from './UploadImage';
import TableSkeleton from './TableSkeleton';
import PredictionsTable from './PredictionsTable';
import ImageWithBoundingBoxes from './ImageBoundingBox';

const ImageClassifier: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'mobilenet' | 'coco-ssd'>('coco-ssd'); // New state for selected model

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
    <Flex p={4} gap={4} flexDirection={{base: "column", sm:"column", md:"column", lg:"row" }} alignItems="flex-start" w="100%">
      <Box w="100%" minW="300px">
      <Select
        placeholder="Select model"
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

      <Box className="dog-image" display="flex" justifyContent="center" mb={6}>
          {file ? (
            <ImageWithBoundingBoxes imageSrc={URL.createObjectURL(file)} predictions={predictions} />
          ) : (
            <ChakraImage
              src="https://via.placeholder.com/400"
              alt="dog"
              width="100%"
              height="400px"
              objectFit="cover"
              borderRadius="md"
            />
          )}
      </Box>


      <Box className="upload-container" display="flex" gap={6} flexDirection="column" w="100%">
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

      </Box>
      <Box w="100%">
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
  );
};

export default ImageClassifier;
