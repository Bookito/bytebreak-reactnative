import * as React from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import Carousel from "react-native-reanimated-carousel";
import { Post } from "../../api/post/type";
import Animated, { FadeInRight, AnimateProps } from "react-native-reanimated";
import { Box, Center, Text, VStack } from "native-base";
import CarouselCard from "../../components/cards/CarouselCard";
import { NUMBER_OF_CAROUSEL } from "../../constants/controller";

interface Props {
  dataWithThumbnail: Post[];
  handlePress: (url: string) => void;
  width: number;
}

interface SBItemsProps extends AnimateProps<ViewProps> {
  post: Post;
  handlePress: (url: string) => void;
  style?: StyleProp<ViewStyle>;
  index: number;
  pretty?: boolean;
}

const SBItem = ({
  post,
  style,
  index,
  pretty,
  testID,
  handlePress,
  ...animatedViewProps
}: SBItemsProps) => {
  return (
    <LongPressGestureHandler onActivated={() => {}}>
      <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
        <CarouselCard
          post={post}
          key={post.title}
          onPress={() => handlePress(post.link)}
        />
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const CarouselSection = ({ dataWithThumbnail, handlePress, width }: Props) => {
  const [mode, setMode] = React.useState<any>("horizontal-stack");
  const [snapDirection, setSnapDirection] = React.useState<"left" | "right">(
    "left"
  );
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const [loop, setLoop] = React.useState<boolean>(true);
  const [autoPlay, setAutoPlay] = React.useState<boolean>(false);
  const [autoPlayReverse, setAutoPlayReverse] = React.useState<boolean>(false);
  const viewCount = dataWithThumbnail.length;

  return (
    <VStack alignItems="center" height={400} flexShrink={0} mt={0} pt={0}>
      <Carousel
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        width={width}
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        mode={mode}
        loop={loop}
        autoPlay={autoPlay}
        autoPlayInterval={3000}
        autoPlayReverse={autoPlayReverse}
        data={[...dataWithThumbnail]}
        modeConfig={{
          snapDirection,
          stackInterval: mode === "vertical-stack" ? 8 : 18,
        }}
        customConfig={() => ({ type: "positive", viewCount })}
        renderItem={({ item, index }: { item: Post; index: number }) => (
          <SBItem
            index={index}
            key={index}
            entering={FadeInRight.delay((viewCount - index) * 100).duration(
              500
            )}
            post={item}
            handlePress={() => handlePress(item.link)}
          />
        )}
      />
    </VStack>
  );
};

export default CarouselSection;
