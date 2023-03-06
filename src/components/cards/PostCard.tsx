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
} from "native-base";
import { Post } from "../../api/post/type";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const { title, blogName, link, thumbnail, publishedDate, postOwner } = post;

  const defaultThumbnail = thumbnail
    ? thumbnail
    : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg";
  const defaultLog =
    "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg";

  return (
    <Box alignItems="center" w="100%" position="relative">
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
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <HStack alignItems="center" space={3}>
              {!!postOwner && (
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {postOwner}
                </Text>
              )}
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {blogName}
              </Text>
            </HStack>
          </Stack>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {publishedDate}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
      <Avatar
        position="absolute"
        right="16px"
        top="172px"
        borderWidth="4px"
        source={{
          uri: defaultLog,
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
    </Box>
  );
};

export default PostCard;
