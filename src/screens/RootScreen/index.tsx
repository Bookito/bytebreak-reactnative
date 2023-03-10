import { useNavigation } from "@react-navigation/native";
import {
  HStack,
  Switch,
  Text,
  useColorMode,
  VStack,
  ScrollView,
  Box,
} from "native-base";
import React from "react";
import { usePosts } from "../../api/post/query";
import { Post } from "../../api/post/type";
import BottomTab from "../../components/layout/BottomTab";
import CarouselSection from "./CarouselSection";
import ListCard from "../../components/cards/ListCard";
import AppBar from "../../components/layout/AppBar";

const RootScreen = () => {
  const { data } = usePosts();
  const navigation = useNavigation();

  if (!data) return null;

  const dataWithThumbnail = data.filter((e: Post) => !!e.thumbnail);

  const handlePress = (url: string) => {
    // @ts-ignore
    navigation.navigate("WebView", { url });
  };

  return (
    <VStack
      w="100%"
      h="100%"
      safeAreaTop
      justifyContent="space-between"
      flex={1}
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
    >
      <AppBar />
      <ScrollView
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        pt={4}
        flex={1}
      >
        <CarouselSection
          dataWithThumbnail={dataWithThumbnail}
          handlePress={handlePress}
        />
        <VStack space={5} alignItems="center" mx={1}>
          {dataWithThumbnail
            .slice(3, 11)
            .reduce<Post[][]>((pairs, e, i, arr) => {
              if (i % 2 === 0) {
                pairs.push(arr.slice(i, i + 2));
              }
              return pairs;
            }, [])
            .map((pair, index) => (
              <HStack key={index} space={5}>
                {pair.map((e: Post) => (
                  <ListCard post={e} key={e.title} onPress={handlePress} />
                ))}
              </HStack>
            ))}
        </VStack>
      </ScrollView>
      <BottomTab />
    </VStack>
  );
};

// Color Switch Component

export default RootScreen;
