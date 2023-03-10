import { useNavigation } from "@react-navigation/native";
import { HStack, VStack, ScrollView, Text } from "native-base";
import React from "react";
import { usePosts } from "../../api/post/query";
import { Post } from "../../api/post/type";
import BottomTab from "../../components/layout/BottomTab";
import CarouselSection from "./CarouselSection";
import ListCard from "../../components/cards/ListCard";
import AppBar from "../../components/layout/AppBar";
import CompanyButton from "../../components/buttons/CompanyButton";

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
          dataWithThumbnail={dataWithThumbnail}
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
            <CompanyButton company="AWS" />
            <CompanyButton company="Google" />
            <CompanyButton company="Microsoft" />
            <CompanyButton company="Uber" />
            <CompanyButton company="LinkedIn" />
          </HStack>
        </ScrollView>
        <VStack space={5} alignItems="center" mx={1} mt={4} mb={12}>
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

export default RootScreen;
