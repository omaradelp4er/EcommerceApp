import React from "react";
import { StyleSheet } from "react-native";
import {
    Spinner,
    VStack,
    Center,
    NativeBaseProvider,
  } from "native-base"
export function LoadingScreen() {
  return (
    <VStack space={4} alignItems="center">
      {/* <Heading textAlign="center" mb="10">
        Sizes
      </Heading> */}
      <Spinner size="lg" />
    </VStack>
  );
}
export const Example = () => {
  return (
    <NativeBaseProvider>
    <Center flex={1} px="3">
      <Example />
    </Center>
  </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default LoadingScreen;
