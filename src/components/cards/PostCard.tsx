import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";
import { Card, Box } from "native-base";

interface Props {
  imageUri: string;
  title: string;
  description: string;
  channelLogoUri: string;
  channelName: string;
  category: string;
}

const PostCard = ({
  imageUri,
  title,
  description,
  channelLogoUri,
  channelName,
  category,
}: Props) => {
  return (
    <Card>
      <TouchableHighlight onPress={() => console.log("Button pressed")}>
        <Box>
          <Box style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
                marginRight: 10,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
              <Text numberOfLines={2} style={{ marginTop: 5 }}>
                {description}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Image
                  source={{ uri: channelLogoUri }}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    marginRight: 5,
                  }}
                />
                <Text style={{ fontSize: 12 }}>{channelName}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Text style={{ fontSize: 12 }}>{category}</Text>
              </View>
            </View>
          </Box>
        </Box>
      </TouchableHighlight>
    </Card>
  );
};

export default PostCard;
