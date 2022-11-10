import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { StackRoutes } from "./stack.routes";

const AppStack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
      <AppStack.Screen
        name="DetailsRepository"
        component={DetailsRepository}
        options={{
          title: "Detalhes",
          headerBackground: () => (
            <View style={{ backgroundColor: "#000000", height: 100 }} />
          ),
        }}
      />
    </NavigationContainer>
  );
}
