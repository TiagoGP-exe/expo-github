import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Platform } from "react-native";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { DetailsRepository } from "../screens/DetailsRepository";

type BarStyle = "light" | "dark";

const Stack = createStackNavigator();

export const TabStack: FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "WeFit",
        }}
      >
        <Stack.Screen
          name="DetailsRepository"
          options={{
            title: "Detalhe",
          }}
          component={DetailsRepository}
        />
      </Stack.Navigator>
    </>
  );
};
