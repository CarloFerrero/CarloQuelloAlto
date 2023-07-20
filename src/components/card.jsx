import { Box, Button, Flex, Heading, Tag, Text } from "@chakra-ui/react";

import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";
import { tags_ } from "../utils/tags";

const Card = ({ title, description, theme, link, tags }) => {
  return (
    <Box
      py={{
        base: "5",
        lg: "6",
      }}
      px={{
        base: "5",
        lg: "6",
      }}
      w="100%"
      borderRadius="16px"
      height="300px"
      display="flex"
      alignItems="flex-start"
      justifyContent="end"
      flexDirection="column"
      border="1px solid"
      borderColor="var(--chakra-colors-chakra-border-color)"
    >
      <Heading as="h3" fontSize="25px" fontWeight="regular">
        {title}
      </Heading>
      <Flex gap="5px">
        {tags.map((tag) => {
          return (
            <Tag size="sm" mt="10px" colorScheme={tags_[tag].color}>
              {tags_[tag].name}
            </Tag>
          );
        })}
      </Flex>
      <Text as="p" fontSize="16px" maxW="500px" mt="10px" opacity={0.8}>
        {description.substring(0, 100) + `...`}
      </Text>
      <Link to={link}>
        <Button
          mt="10px"
          alignItems="center"
          rightIcon={<BsArrowRightShort size={20} />}
          variant="link"
        >
          Learn more
        </Button>
      </Link>
    </Box>
  );
};

export default Card;
