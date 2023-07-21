import { Box, Flex, HStack, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import ColorMode from "./colorMode";
import DownloadResume from "./DownloadResume";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section" position="sticky" top="0" zIndex="sticky" backdropFilter="blur(10px)">
      <Box
        as="nav"
        bg="bg-surface"
        borderBottom="1px solid"
        borderColor="var(--chakra-colors-chakra-border-color)"
      >
        <Box
          py={{
            base: "4",
            lg: "5",
          }}
          px={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="10" justify="space-between">
            <Flex gap="10px" alignItems='center'>
              {/* <Image 
                src="/logo.jpg"
                alt="Carlo Quell'Alto"
                boxSize="40px"
                borderRadius="full"
              /> */}
              <Text fontWeight="bold" fontSize="26px">
                <Link to="/">CarloQuelloAlto_</Link>
              </Text>
            </Flex>
            {isDesktop ? (
              <HStack spacing="3">
                <ColorMode />
                <DownloadResume />
              </HStack>
            ) : (
              <HStack spacing="3">
              <ColorMode />
              <DownloadResume />
              </HStack>
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
