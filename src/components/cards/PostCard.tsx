import React from "react";
import {
  Card,
  Box,
  AspectRatio,
  Center,
  Heading,
  HStack,
  Stack,
  Image,
  Text,
} from "native-base";
import { Post } from "../../api/post";

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const { title, blogName, link, thumbnail, publishedDate, postOwner } = post;

  const description = "디스크립션란";
  const category = "카테고리란";
  const defaultThumbnail = thumbnail
    ? thumbnail
    : "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg";
  const defaultLog =
    "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg";

  return (
    <Box alignItems="center">
      <Box
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
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            right="0"
            bottom="0"
            px="3"
            py="1.5"
          >
            PHOTOS
          </Center>
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
    </Box>
  );
};

export default PostCard;
