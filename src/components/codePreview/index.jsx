import "./style.css";

import { Box, Flex, IconButton, Text, useColorMode } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";

import { BiCopy } from "react-icons/bi";
import React from "react";
import github from "prism-react-renderer/themes/github";
import vsLight from "prism-react-renderer/themes/vsDark";

const CodePreview = ({ code, language }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      border="1px solid"
      borderColor="var(--chakra-colors-chakra-border-color)"
      borderRadius="20px"
    >
      <Flex
        justifyContent="space-between"
        padding="10px 20px"
        borderRadius="16px 16px 0px 0px"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="var(--chakra-colors-chakra-border-color)"
      >
        <Text>{language}</Text>
        <Text>
          <IconButton
            variant="solid"
            icon={<BiCopy fontSize="1.25rem" />}
            aria-label="Open Menu"
          />
        </Text>
      </Flex>
      <Highlight
        {...defaultProps}
        code={code}
        language="jsx"
        theme={colorMode === "light" ? github : vsLight}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodePreview;
