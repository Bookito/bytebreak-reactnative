import React from "react";
import { WebView } from "react-native-webview";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/routers";

type WebViewScreenRouteProp = RouteProp<ParamListBase, "WebView">;

type WebViewScreenProps = {
  route: WebViewScreenRouteProp & {
    params: {
      url: string;
      title: string;
    };
  };
};

const WebViewScreen = ({ route }: WebViewScreenProps) => {
  const { url, title } = route.params;
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title:
        "The content displayed in this WebView is owned by the blogger of Google. All rights reserved.",
    });
  }, [navigation, title]);

  return <WebView source={{ uri: url }} />;
};

export default WebViewScreen;
