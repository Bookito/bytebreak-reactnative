import React from "react";
import { WebView } from "react-native-webview";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type WebViewScreenRouteProp = RouteProp<RootStackParamList, "WebView">;

type WebViewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "WebView"
>;

type WebViewScreenProps = {
  route: WebViewScreenRouteProp & {
    params: {
      url: string;
      title?: string; // title 프로퍼티를 선택적으로 만듦
    };
  };
  navigation: WebViewScreenNavigationProp;
};

const WebViewScreen: React.FC<WebViewScreenProps> = ({ route, navigation }) => {
  const { url, title } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:
        "The content displayed in this WebView is owned by the blogger of Google. All rights reserved.",
    });
  }, [navigation, title]);

  return <WebView source={{ uri: url }} />;
};

export default WebViewScreen;
