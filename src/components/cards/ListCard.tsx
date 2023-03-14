import React from "react";
import {
  Box,
  AspectRatio,
  Heading,
  HStack,
  Stack,
  Image,
  Text,
  Avatar,
  VStack,
  Pressable,
} from "native-base";
import { Post } from "../../api/post/type";
import { convertToLocalTime } from "../../utils/convertToLocalTime";

interface Props {
  post: Post;
  onPress: (url: string) => void;
}

const ListCard = ({ post, onPress }: Props) => {
  const { title, blogName, link, thumbnail, publishedDate, postOwner } = post;

  const logos = {
    Google:
      "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_640.png",
    Meta: "https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_640.png",
    Instagram:
      "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg",
  };

  const thumbnails = {
    LinkedIn:
      "https://cdn.pixabay.com/photo/2018/06/28/22/10/linkedin-3504899_640.jpg",
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
      onPress={() => onPress(link)}
    >
      <HStack alignItems="flex-start">
        <Box w="25%">
          <AspectRatio w="100%" ratio={16 / 12}>
            <Image source={{ uri: defaultThumbnail }} alt="image" />
          </AspectRatio>
        </Box>
        <Box w="75%">
          <Stack p="4" space={3}>
            <VStack space={2}>
              <Heading size="xs" ml="-1" numberOfLines={2}>
                {title}
              </Heading>
              <HStack justifyContent="space-between" alignItems="center">
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="400"
                >
                  {blogName}
                </Text>
                <Text
                  fontSize="xs"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {convertToLocalTime(publishedDate)}
                </Text>
              </HStack>
            </VStack>
          </Stack>
        </Box>
      </HStack>
    </Pressable>
  );
};

export default ListCard;
