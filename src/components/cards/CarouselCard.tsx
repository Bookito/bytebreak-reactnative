import React from "react";
import {
  Box,
  AspectRatio,
  Heading,
  HStack,
  VStack,
  Image,
  Text,
  Avatar,
  Pressable,
} from "native-base";
import { Post } from "../../api/post/type";
import { convertToLocalTime } from "../../utils/convertToLocalTime";

interface Props {
  post: Post;
  onPress: () => void;
}

const CarouselCard = ({ post, onPress }: Props) => {
  const { title, blogName, link, thumbnail, publishedDate, postOwner } = post;

  const logos = {
    Google:
      "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_640.png",
    Meta: "https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_640.png",
    Instagram:
      "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg",
  };

  const defaultThumbnail = thumbnail
    ? thumbnail
    : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg";
  const defaultLog =
    "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg";

  return (
    <Pressable
      alignItems="center"
      w="100%"
      position="relative"
      onPress={onPress}
      shadow={6}
      _dark={{
        backgroundColor: "warmGray.50",
      }}
      _light={{
        backgroundColor: "warmGray.50",
      }}
      rounded={15}
    >
      <Box w="100%" rounded={15} overflow="hidden">
        <Box>
          <AspectRatio w="100%" ratio={16 / 10}>
            <Image
              source={{
                uri: defaultThumbnail,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <VStack p={5} space={3} h="150px">
          <Heading size="sm" ml="-1">
            {title}
          </Heading>
          <HStack alignItems="center" justifyContent="space-between">
            {!!postOwner && (
              <Text
                fontSize="xs"
                _light={{
                  color: "warmGray.700",
                }}
                _dark={{
                  color: "warmGray.700",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {postOwner}
              </Text>
            )}
          </HStack>
        </VStack>
      </Box>
      <Avatar
        position="absolute"
        right="12px"
        top="195px"
        borderWidth="4px"
        size={10}
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_640.png",
        }}
        _dark={{
          borderColor: "warmGray.600",
          backgroundColor: "warmGray.700",
        }}
        _light={{
          backgroundColor: "warmGray.50",
          borderColor: "warmGray.50",
        }}
      />
    </Pressable>
  );
};

export default CarouselCard;
