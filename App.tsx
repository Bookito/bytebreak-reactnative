import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import RootScreen from "./src/screens/RootScreen";

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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <RootScreen />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
