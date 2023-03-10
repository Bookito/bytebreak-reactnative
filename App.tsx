import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import RootScreen from "./src/screens/RootScreen";
import WebViewScreen from "./src/screens/WebViewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

// react-query
const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  },
});

export type RootStackParamList = {
  Root: undefined;
  WebView: { url: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={RootScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WebView"
              component={WebViewScreen}
              initialParams={{ url: "" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
