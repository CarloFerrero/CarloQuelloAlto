import { Box, Button } from "@chakra-ui/react";
import React, { useRef, useCallback } from "react";
import Webcam, { WebcamProps } from "react-webcam";

interface WebcamComponentProps extends WebcamProps {
  onCapture: (imageSrc: string) => void;
}

const WebcamComponent: React.FC<WebcamComponentProps> = ({ onCapture, ...webcamProps }) => {
  const webcamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if(imageSrc)
      onCapture(imageSrc);
    }
  }, [onCapture]);

  return (
    <Box>
      <Webcam
        height={webcamProps.height || 720}
        // @ts-ignore
        screenshotFormat="image/jpeg"
        width={webcamProps.width || 1280}
        ref={webcamRef}
        {...webcamProps}
      />
      <Box display="flex" mt="20px">
      <Button onClick={capture}>Capture photo</Button>
      </Box>
    </Box>
  );
};

export default WebcamComponent;
