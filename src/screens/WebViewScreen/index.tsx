import { View } from "native-base";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "https://github.com/react-native-webview/react-native-webview",
        }}
        onMessage={(event) => {}}
      />
    </View>
  );
};

export default WebViewScreen;
