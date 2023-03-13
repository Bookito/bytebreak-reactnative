import { useNavigation } from "@react-navigation/native";
import { HStack, VStack, ScrollView, Text, Button } from "native-base";
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
      {/*<AppBar />*/}
      <ScrollView
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        pt={4}
        flex={1}
      >
        <CarouselSection
          dataWithThumbnail={dataWithThumbnail.slice(0, NUMBER_OF_CAROUSEL)}
          handlePress={handlePress}
        />
        <HStack alignItems="center" justifyContent="center" mt={4}>
          <Text fontSize={20} fontWeight="bold">
            Big Tech Insights
          </Text>
        </HStack>
        <ScrollView
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          py={4}
          flex={1}
          horizontal={true}
        >
          <HStack space={2} alignItems="center">
            {shuffle(COMPANY_LIST).map((company) => (
              <CompanyButton company={company} key={company} />
            ))}
          </HStack>
        </ScrollView>
        <VStack space={5} alignItems="center" mx={1} mt={4} mb={12}>
          {/*{dataWithThumbnail*/}
          {/*  .slice(0, 10)*/}
          {/*  .reduce<Post[][]>((pairs, e, i, arr) => {*/}
          {/*    if (i % 2 === 0) {*/}
          {/*      pairs.push(arr.slice(i, i + 2));*/}
          {/*    }*/}
          {/*    return pairs;*/}
          {/*  }, [])*/}
          {/*  .map((pair, index) => (*/}
          {/*    <HStack key={index} space={5}>*/}
          {/*      {pair.map((e: Post) => (*/}
          {/*        <ListCard post={e} key={e.title} onPress={handlePress} />*/}
          {/*      ))}*/}
          {/*    </HStack>*/}
          {/*  ))}*/}
          {dataWithThumbnail.slice(0, 10).map((e: Post) => (
            <PostCard post={e} key={e.title} onPress={handlePress} />
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
      </ScrollView>
      <BottomTab />
    </VStack>
  );
};

export default RootScreen;
