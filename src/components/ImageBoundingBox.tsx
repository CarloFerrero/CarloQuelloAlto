import { Box, Image as ChakraImage } from '@chakra-ui/react';

import React from 'react';

interface ImageWithBoundingBoxesProps {
  imageSrc: string;
  predictions: any;
}

const ImageWithBoundingBoxes : React.FC<ImageWithBoundingBoxesProps> = ({ imageSrc, predictions }) => {
  const originalImageWidth = 400; 
  const originalImageHeight = 400; 

  const displayedImageWidth = window.innerWidth; 
  const displayedImageHeight = 400; 

  const scaleX = displayedImageWidth / originalImageWidth;
  const scaleY = displayedImageHeight / originalImageHeight;

  console.log(scaleX, scaleY)
  return (
    <Box position="relative" width="100%" mb={4}>
      <ChakraImage src={imageSrc} alt="Image" width="100%" height="auto" />
      {/* {predictions.map((prediction : any, index: any) => (
        <Box
          key={index}
          position="absolute"
          border="0px solid red"
          left={prediction.bbox[0] / scaleX}
          top={prediction.bbox[1] / scaleY}
          width={prediction.bbox[2] / scaleX}
          height={prediction.bbox[3] / scaleY}
        />
      ))} */}
    </Box>
  );
};

export default ImageWithBoundingBoxes;