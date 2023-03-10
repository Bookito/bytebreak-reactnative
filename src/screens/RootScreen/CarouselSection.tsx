import * as React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Post } from "../../api/post/type";
import { useSharedValue } from "react-native-reanimated";
import { Box } from "native-base";
import CarouselCard from "../../components/cards/CarouselCard";

interface CarouselItem {
  item: Post;
}

interface Props {
  dataWithThumbnail: Post[];
  handlePress: (url: string) => void;
}

const window = Dimensions.get("window");
const PAGE_WIDTH = window.width;

const CarouselSection = ({ dataWithThumbnail, handlePress }: Props) => {
  const progressValue = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.8,
  };

  return (
    <Box alignItems="center" mx={1} flexShrink={0} height={350}>
      <Carousel
        {...baseOptions}
        loop
        autoPlay
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        data={[...dataWithThumbnail]}
        renderItem={({ item }: CarouselItem) => (
          <CarouselCard
            post={item}
            key={item.title}
            onPress={() => handlePress(item.link)}
          />
        )}
      />
    </Box>
  );
};

export default CarouselSection;
