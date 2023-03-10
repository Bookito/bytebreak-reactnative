import * as React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Post } from "../../api/post/type";
import PostCard from "../../components/cards/PostCard";
import { useSharedValue } from "react-native-reanimated";
import { Box } from "native-base";

interface CarouselItem {
  item: Post;
}

interface Props {
  dataWithThumbnail: Post[];
}

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;

const CarouselSection = ({ dataWithThumbnail }: Props) => {
  const progressValue = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  };

  return (
    <Box>
      <Carousel
        {...baseOptions}
        loop
        autoPlay
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        data={[...dataWithThumbnail.slice(0, 3)]}
        renderItem={({ item }: CarouselItem) => (
          <PostCard post={item} key={item.title} onPress={() => {}} />
        )}
      />
    </Box>
  );
};

export default CarouselSection;
