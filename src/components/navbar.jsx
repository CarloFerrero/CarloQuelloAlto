import { Box, HStack, Text, useBreakpointValue } from "@chakra-ui/react";

import ColorMode from "./colorMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section">
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
            <Box>
              <Text fontWeight="bold" fontSize="26px">
                <Link to="/">CarloQuelloAlto_</Link>
              </Text>
            </Box>
            {isDesktop ? (
              <HStack spacing="3">
                <ColorMode />
              </HStack>
            ) : (
              <ColorMode />
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
