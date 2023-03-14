import { useNavigation } from "@react-navigation/native";
import {
  HStack,
  VStack,
  ScrollView,
  Text,
  Button,
  Center,
  Divider,
} from "native-base";
import React from "react";
import { usePosts } from "../../api/post/query";
import { Post } from "../../api/post/type";
import BottomTab from "../../components/layout/BottomTab";
import AppBar from "../../components/layout/AppBar";
import shuffle from "../../utils/shuffle";
import CarouselSection from "./CarouselSection";
import { NUMBER_OF_CAROUSEL } from "../../constants/controller";
import CompanyButton from "../../components/buttons/CompanyButton";
import ListCard from "../../components/cards/ListCard";
import { COMPANY_LIST } from "../../constants/constants";
import PostCard from "../../components/cards/PostCard";
import LogoIcon from "../../components/icons/LogoIcon";

import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width - 50;

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
      _light={{ bg: "warmGray.100" }}
      _dark={{ bg: "warmGray.800" }}
      space={0}
    >
      {/*<AppBar />*/}
      <Center px={4} pt={12} mb={8}>
        {/*<LogoIcon size={20} />*/}
        <Text fontSize="4xl" fontWeight="bold" color="warmGray.900">
          Bookito
        </Text>
      </Center>
      <ScrollView
        mb={8}
        flex={1}
        w="100%"
        _light={{ bg: "warmGray.100" }}
        _dark={{ bg: "warmGray.800" }}
      >
        <Center mb={2} pb={0}>
          <Text
            color="warmGray.800"
            fontSize="md"
            fontWeight="bold"
            width={SCREEN_WIDTH}
          >{`${NUMBER_OF_CAROUSEL} New Posts`}</Text>
        </Center>
        <CarouselSection
          dataWithThumbnail={dataWithThumbnail.slice(0, NUMBER_OF_CAROUSEL)}
          handlePress={handlePress}
          width={SCREEN_WIDTH}
        />
        <Center>
          <Text
            color="warmGray.800"
            mb={3}
            fontSize="md"
            fontWeight="bold"
            width={SCREEN_WIDTH}
          >
            Recent Activity
          </Text>
          <HStack
            width={SCREEN_WIDTH}
            bgColor="warmGray.200"
            px={4}
            py={6}
            rounded={6}
          >
            <HStack>
              <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <VStack>
                <Text>4</Text>
                <Text>Today</Text>
              </VStack>
            </HStack>
            <HStack>
              <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <VStack>
                <Text>18</Text>
                <Text>This week</Text>
              </VStack>
            </HStack>
            <HStack>
              <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <VStack>
                <Text>24</Text>
                <Text>This Month</Text>
              </VStack>
            </HStack>
          </HStack>
        </Center>
        <VStack mt={4}>
          <Center>
            <Text
              color="warmGray.800"
              mb={1}
              fontSize="md"
              fontWeight="bold"
              width={SCREEN_WIDTH}
            >
              Latest Posts
            </Text>
            <VStack
              space={5}
              alignItems="center"
              mx={1}
              mt={4}
              mb={12}
              width={SCREEN_WIDTH}
            >
              {dataWithThumbnail.slice(0, 10).map((e: Post) => (
                <ListCard post={e} key={e.title} onPress={handlePress} />
              ))}
              <Button
                w="100%"
                borderRadius={16}
                bg="purple.500"
                _hover={{ bg: "purple.600" }}
                color="white"
              >
                Load More
              </Button>
            </VStack>
          </Center>
        </VStack>
      </ScrollView>
      {/*<BottomTab />*/}
    </VStack>
  );
};

export default RootScreen;
