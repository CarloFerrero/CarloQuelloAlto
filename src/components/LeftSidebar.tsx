import * as React from "react";
import { Box, Text } from "@chakra-ui/react";


const LeftSidebar: React.FC = () => {
  const modelInfo = {
    "coco-ssd": {
      name: "coco-ssd",
      description:
        "The coco-ssd model is trained to detect common objects in images, such as people, cars, animals, etc.",
    },
    "mobileNet": {
      name: "mobileNet",
      description:
        "MobileNet is a lightweight neural network architecture designed for efficient on-device vision applications.",
    },
  };

  return (
    <Box p={4} borderRight={{sm: "none", md: "1px solid #ccc"}} textAlign="left">
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        Image Classifier
      </Text>
      <Text fontWeight={"normal"}>
        {modelInfo["coco-ssd"].name}
      </Text>
      <Text fontSize="sm" mb={4}>
        {modelInfo["coco-ssd"].description}
      </Text>
      <Text fontWeight={"normal"}>
        {modelInfo["mobileNet"].name}
      </Text>
      <Text fontSize="sm" mb={4}>
        {modelInfo["mobileNet"].description}
      </Text>
    </Box>
  );
};

export default LeftSidebar;
