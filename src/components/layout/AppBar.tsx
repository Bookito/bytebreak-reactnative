import React from "react";
import {
  HStack,
  IconButton,
  Icon,
  useColorMode,
  Switch,
  Text,
} from "native-base";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import LogoIcon from "../icons/LogoIcon";

const AppBar = () => {
  return (
    <HStack
      px={4}
      shadow={6}
      bgColor="white"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <HStack>
        <LogoIcon />
        <Text>Bookito</Text>
      </HStack>
      <ToggleDarkMode />
    </HStack>
  );
};

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      {colorMode === "light" && (
        <Icon
          mb="1"
          as={
            <IconButton icon={<Feather name="sun" size={24} color="black" />} />
          }
          size="md"
          alignSelf="center"
        />
      )}
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      {colorMode !== "light" && (
        <Icon
          mb="1"
          as={
            <MaterialCommunityIcons
              name="weather-night"
              size={24}
              color="black"
            />
          }
          size="md"
          alignSelf="center"
        />
      )}
    </HStack>
  );
}

export default AppBar;
