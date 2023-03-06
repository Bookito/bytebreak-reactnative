import React from "react";
import { Box, Text, Icon, HStack, Center, Pressable } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

const BottomTab = () => {
  const [selected, setSelected] = React.useState(1);
  return (
    <Center position="absolute" left="0" right="0" bottom="0">
      <Box flex={1} bg="white" width="100%" alignSelf="center" safeArea>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<Ionicons name="bookmark" size={24} color="black" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Bookmark
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "cart" : "cart-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Proposal
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={<Entypo name="dots-three-horizontal" color="black" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Settings
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </Center>
  );
};

export default BottomTab;
