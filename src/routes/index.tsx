import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { DetailsRepository } from "../screens/DetailsRepository";

import RootNavigatorParamList from "./NavigatorTypes";
import { StackRoutes } from "./stack.routes";

const Stack = createStackNavigator<RootNavigatorParamList>();

export function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#000"} style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={StackRoutes}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailsRepository"
          component={DetailsRepository}
          options={{
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#000",
            },
            title: "Detalhes",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
