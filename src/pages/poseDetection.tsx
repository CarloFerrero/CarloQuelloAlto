import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs';

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react'

import { PixelInput } from '@tensorflow-models/pose-detection/dist/shared/calculators/interfaces/common_interfaces';
import WebcamComponent from '../components/webcamComponent';
import { getCurrentProject } from '../utils/currentProjext';
import { useLocation } from 'react-router-dom';

const PoseDetection = () => {
  let location = useLocation();
  const currentProject = getCurrentProject(location);
  const [image, setImage] = useState<PixelInput>();

  const getModelAndDetector = async (image : PixelInput) => {
    const model = poseDetection.SupportedModels.MoveNet;
    const detector = await poseDetection.createDetector(model);
    const poses = await detector.estimatePoses(image);
    return poses;
  }
  
  useEffect(() => {
    tf.setBackend('webgl').then(() => {
      console.log('WebGL backend loaded');
    });
  }, []);

  const handleCapture = (imageSrc: string) => {

    // the imageSrc is like this: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCAEZAfQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACIQAQEAAgICAgMBAQAAAAAAAAABETECIUFxElFhgbEyof/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A6AAAAAAAAAAAAAAOV3fddXK7vuggAKsTwvEGmmWgAASstsAIoCAAAAAAAAAAAAKACoVBkBRVRQWNJFAABmotRBAFAAAAAAAAHQAAAAAAAAAEUQFAAcXW6rkALUBfC8UvhrjoGlRQAAGa0lBkAEFQAAATIBkygCiKCgIKImQbSiUEAUVUVBVyyA1lMogKgKAAAAAAAAAAOgAAAAAAAAAAAAAMcr4Zhe6vgGaCwC7bmmJ3XQARUFEVQABgWoCCoAioAioAABlcsgNDKgogDQiggoAqAKIAAAAAAAAAAAAAAA6AAAAAAAAAAAAJeplWOV8Aw1y8RIXYIvhFviAvFtOKggKgYJFFAAErLbACVUoIguAQXCAgoCCmAQaMAg1gwKyqAjQAAAAAAAAAAAAAAAAAAAOgAAACKACKAAAAA5crm/8AHS3Ey5A1Opllq9TH2yCw3SatIDpNJVRAAAXsVQAAZrSUGUulSgkaSNAiKIrIoCKAAAKqAJYy2yCwIogjWDAMi1FAAAAAAAAAAAAAAHQAAAAABFABFAABnlesfbEXlsgJd+kFAuo1xZu/Tc0CoqIAACooKAoJVAYFqACoigAAAIKgKAAAAy0lgLGpGW4IJVSqMoqAAAAAAAAAAAAAAA6AAAAAAAAJpQAqJyvXsHNq9T2kXl9Ays/iL49gkdXPi6AgIgoigKgDQmVUAAZotZABEUQMqCoIKAAZQBcqyoKCgi5OkBcplAQAUAAAAAAAAAAAQAUB0AAAAAAAAAAc+W/To47Brize61qMgLfEJtN0G+LSTQAgIAAKIoCooKJ2qgzWmaCIoiso0AgpgFSrCgyUARRQFABFQABUAAAAAAAAAAAJ2ANYLEGQAdAFAAAAAAAAGeV69uca5Xv0nEF5eIyXugLNWpFuovEG0VEEAAAAVFAVAGhBRUqgMAIoigAAKUAZFARUAVZEWUGmK1llUQBAAUAAAAAAAQFWIoNpazlAXIgg6AKAAAAAAAM8riewc91qdS1lq6kBhRZ9/QJe63xYjpNAAiAAAAAqACooKznu/nppz7UdIqT+/wBUGKjVZBQEUBAVWTIKIoIKgCouAQMYBABQAAFkyvx/IMjXxTAIGDCKirgwCIuDAIpgwCC4AdAFQAAAAAAc+d7w6ON7oLDltZ12wCrqe0W+J9ASOjHFoBAQAAAABEFaMsgLkQBrK/JgVGryRBFUEBcoAAdAGVQBpBAVqVgB0Yq5SgAKgAA3lhcorVrIgAigAgqiAKIAAA6gKyAAAACKDPLqObXO+GYDV6nthrlv0yCzZurOpakBuaUAQBAAARUUShURVEAUQBUBUURUUioAogAqAKgAAUEABRAGgFQAQEVkVRAFAAVAVQAEVAAAdQFZAAAAAS3EoOVua1GG9QGN0FgLepIRL3W+IKioAAgAAgCiVCoKoioACgCiB6MZakwioy0gAhlRRMmUAAFiieQLEaMQGFMVAbAEAAGWmaqgioKioDSEBRUAAUEAB1AVkAAAAY53w25crmgkXl4hEuwRqeay1qewZjrNOcjoAgIAACKigioBdMtXTIoCgGFwAIqA1FBBAAQVAMJhQAFAS7VLsBUUAyIC9CANwuGTKoM1pmxFQBRQEDy0yoYACqLJV+METHoXEAaEFRQQFABL1HF05XrDEBrUYaumQFu8fRNnkGuLSTSggIgAAqKgIAot0w3lAMAgoAIACtgIIKgAAIKAAAJ5VkFAAAAAAVAFEAWzLOGjYMKIqKQTyK2vU/KCKvyqZqALmiAjoAqAAAAOfK9kZ21ATltABZ1Lf0QupFk0DaKgIAgAKCKgAgCiAAAAAAANRWG5coojSAgqAAACpQSoqAomVyAqZTIAAKIAoACoAVGkojIChpcoA2MGai1oZzQK7CCoogCs8r0rHKgy1dJCggLN+gL3WuLHl0mgVFZAAAAAZWoAAACAqAAqKACApEUG52rErSKCoAAAzWrWQAQEwYUVEMKCgCAAAAAqKAACVGqyqAAAAAAOipFAAAcrc10uq5gsS7ajIC6l/KLf8z9gR0Y4tgiKiAAoAlBAAAAQAAAAAAABUAVZUBW1ZjSAADFEUECgAAKACCoAAoAIAAKIoCYUBMKCoAAAA//Z"
    const image = new Image();
    image.src = imageSrc;
    const pixelInput = tf.browser.fromPixels(image);
    setImage(pixelInput);
    getModelAndDetector(pixelInput).then((poses) => {
      console.log("poses: ", poses);
    });
  };

  return (
    <Container maxW="1200px" mt="30px">
    <Box maxW="650px" mb="30px">
      <Heading fontWeight="light">{currentProject?.title}</Heading>
      <Text mt="10px">{currentProject?.description}</Text>
    </Box>
    <Box>
      <WebcamComponent 
        onCapture={handleCapture}
        screenshotFormat="image/jpeg"
        height="100%"
        width="50%" 
        audio={false} 
        forceScreenshotSourceSize={false} 
        imageSmoothing={false} 
        mirrored={false} 
        onUserMedia={function (stream: MediaStream): void {
            console.log("stream: ", stream)
        } } 
        onUserMediaError={function (error: string | DOMException): void {
            console.log("error: ", error)
        } } screenshotQuality={0}        
      />
    </Box>
    </Container>
  )
}

export default PoseDetection