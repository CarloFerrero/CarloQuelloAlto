import React from "react";
import { useColorMode, IconButton } from "@chakra-ui/react";
import { FiMoon } from "react-icons/fi";

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      icon={<FiMoon fontSize="1.25rem" />}
      aria-label="Open Menu"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
};
export default ColorMode;
