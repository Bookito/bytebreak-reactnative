import {
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
  ScrollView,
} from "native-base";
import React from "react";
import { usePosts } from "../../api/post/query";
import { Post } from "../../api/post/type";
import PostCard from "../../components/cards/PostCard";
import BottomTab from "../../components/layout/BottomTab";

export default function RootScreen() {
  const { data } = usePosts();

  if (!data) return null;

  const dataWithThumbnail = data.filter((e: Post) => !!e.thumbnail);

  return (
    <VStack w="100%" h="100%" safeArea justifyContent="space-between" flex={1}>
      <ScrollView
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center" mx={1}>
          {dataWithThumbnail.slice(0, 10).map((e: Post) => (
            <PostCard post={e} key={e.title} />
          ))}
          <ToggleDarkMode />
        </VStack>
      </ScrollView>
      <BottomTab />
    </VStack>
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
