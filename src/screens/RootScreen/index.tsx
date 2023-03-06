import {
  Box,
  Center,
  Heading,
  HStack,
  Link,
  Switch,
  Text,
  useColorMode,
  VStack,
  ScrollView,
  View,
} from "native-base";
import React from "react";
import { usePosts } from "../../api/post/query";
import NativeBaseIcon from "../../components/NativeBaseIcon";
import PostCard from "../../components/cards/PostCard";
import { Post } from "../../api/post";
import BottomTab from "../../components/layout/BottomTab";

export default function RootScreen() {
  const { data } = usePosts();

  if (!data) return null;
  return (
    <Center w="100%" height="100%">
      <ScrollView
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={3} alignItems="center" safeArea>
          {data.slice(0, 3).map((e: Post) => (
            <PostCard post={e} key={e.title} />
          ))}
          {/*<HStack space={2} alignItems="center">*/}
          {/*  <Text>Edit</Text>*/}
          {/*  <Box*/}
          {/*    _web={{*/}
          {/*      _text: {*/}
          {/*        fontFamily: "monospace",*/}
          {/*        fontSize: "sm",*/}
          {/*      },*/}
          {/*    }}*/}
          {/*    px={2}*/}
          {/*    py={1}*/}
          {/*    _dark={{ bg: "blueGray.800" }}*/}
          {/*    _light={{ bg: "blueGray.200" }}*/}
          {/*  >*/}
          {/*    App.js*/}
          {/*  </Box>*/}
          {/*  <Text>and save to reload.</Text>*/}
          {/*</HStack>*/}
          {/*<Link href="https://docs.nativebase.io" isExternal>*/}
          {/*  <Text color="primary.500" underline fontSize={"xl"}>*/}
          {/*    Learn NativeBase*/}
          {/*  </Text>*/}
          {/*</Link>*/}
          <ToggleDarkMode />
        </VStack>
      </ScrollView>
      <BottomTab />
    </Center>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
