import React from "react";
import { Box, Text, Icon, HStack, Pressable, VStack } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const BottomTab = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box bg="warmGray.400" width="100%" alignSelf="center" shadow={4}>
      <HStack bg="warmGray.400" alignItems="center">
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(0)}
        >
          <VStack alignItems="center">
            <Icon
              mb="1"
              as={<FontAwesome5 name="home" size={24} color="black" />}
              color="white"
              size="md"
              alignSelf="center"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}
        >
          <VStack alignItems="center">
            <Icon
              mb="1"
              as={<FontAwesome5 name="bookmark" size={24} color="black" />}
              color="white"
              size="md"
              alignSelf="center"
            />
            <Text color="white" fontSize="12">
              Bookmark
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <VStack alignItems="center">
            <Icon
              mb="1"
              as={<FontAwesome5 name="lightbulb" size={24} color="black" />}
              color="white"
              size="md"
              alignSelf="center"
            />
            <Text color="white" fontSize="12">
              Suggest
            </Text>
          </VStack>
        </Pressable>
        <Pressable
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}
        >
          <VStack alignSelf="center">
            <Icon
              mb="1"
              as={<FontAwesome5 name="user-cog" size={24} color="black" />}
              color="white"
              size="md"
              alignSelf="center"
            />
            <Text color="white" fontSize="12">
              Settings
            </Text>
          </VStack>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default BottomTab;
