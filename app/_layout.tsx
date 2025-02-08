import { StyleSheet,StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";


const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
     
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RootLayout;
