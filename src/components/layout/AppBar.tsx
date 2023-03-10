import React from "react";
import {
  HStack,
  IconButton,
  Icon,
  useColorMode,
  Switch,
  Text,
  VStack,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import LogoIcon from "../icons/LogoIcon";

const AppBar = () => {
  return (
    <HStack
      px={4}
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <LogoIcon size={9} />
      <ToggleButtonDarkMode />
    </HStack>
  );
};

function ToggleButtonDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Pressable
      onPress={toggleColorMode}
      rounded="full"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
      width="36px"
      height="36px"
    >
      <HStack flex={1} justifyContent="center" alignItems="center">
        {colorMode === "light" ? (
          <Icon as={<Feather name="sun" size={20} color="black" />} size="md" />
        ) : (
          <Icon
            as={
              <MaterialCommunityIcons
                name="weather-night"
                size={20}
                color="black"
              />
            }
            size="md"
          />
        )}
      </HStack>
    </Pressable>
  );
}

export default AppBar;
