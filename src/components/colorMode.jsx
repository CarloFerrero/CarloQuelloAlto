import { IconButton, useColorMode } from "@chakra-ui/react";

import { FiMoon } from "react-icons/fi";
import React from "react";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="outline"
      icon={<FiMoon fontSize="1.25rem" />}
      aria-label="Open Menu"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
};
export default ColorMode;
