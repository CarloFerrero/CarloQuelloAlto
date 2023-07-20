import { ButtonGroup, Box, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <Box
    as="footer"
    mt="100px"
    role="contentinfo"
    py={{ base: "12", md: "12" }}
    px={{
      base: "4",
      lg: "5",
    }}
    borderTop="1px solid"
    borderColor="var(--chakra-colors-chakra-border-color)"
  >
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Text fontWeight="bold" fontSize="26px">
          <Link to="/">CarloQuelloAlto_</Link>
        </Text>

        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} CarloQuelloAlto_ Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Box>
);

export default Footer;
