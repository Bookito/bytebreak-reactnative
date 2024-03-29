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
      w="50%"
      position="relative"
      onPress={() => onPress(link)}
    >
      <Box
        w="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: defaultThumbnail,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="sm" ml="-1" numberOfLines={2}>
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
          </Stack>
        </Stack>
      </Box>
      <Avatar
        size="sm"
        position="absolute"
        right="12px"
        top="82px"
        borderWidth="4px"
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_640.png",
        }}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
          borderColor: "gray.50",
        }}
      />
    </Pressable>
  );
};

export default ListCard;
