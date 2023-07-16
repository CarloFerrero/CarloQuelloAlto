import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import {
  Box,
  Button,
  Image as ChakraImage,
  Select,
} from '@chakra-ui/react';
import { AiOutlinePicture } from 'react-icons/ai';

import UploadImage from './UploadImage';
import TableSkeleton from './TableSkeleton';
import PredictionsTable from './PredictionsTable';

const ImageClassifier: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [predictions, setPredictions] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'mobilenet' | 'coco-ssd'>('mobilenet'); // New state for selected model

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
    <Box p={4} maxWidth="500px" mx="auto" >
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
      <PredictionsTable 
        predictions={predictions}
        selectedModel={selectedModel}
      />
      ) : isLoading ? (
       <TableSkeleton />
      ) : null}
    </Box>
  );
};

export default ImageClassifier;
