import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { TouchableOpacity } from "react-native";
import { GithubUserForm } from "../components/GithubUserForm";
import { useBottomSheet } from "../hooks/useBottomSheet";
import { AllRespositories } from "../screens/AllRespositories";
import FavoritesRepositories from "../screens/FavoritesRepositories";

const Tab = createBottomTabNavigator();

export const StackRoutes: FC = () => {
  const { exposeBottomSheet } = useBottomSheet();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "WeFit",
        headerRight: () => (
          <TouchableOpacity
            onPress={() => exposeBottomSheet(<GithubUserForm />)}
          >
            <Ionicons
              name="ios-settings-sharp"
              size={24}
              color="black"
              style={{ marginRight: 16 }}
            />
          </TouchableOpacity>
        ),
        tabBarLabelStyle: {
          fontSize: 16,
        },
        lazy: true,
      }}
    >
      <Tab.Screen
        name="AllRespositories"
        options={{
          title: "Repositórios",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="logo-github" size={size} color={color} />
          ),
        }}
        component={AllRespositories}
      />
      <Tab.Screen
        name="FavoritesRepositories"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
        component={FavoritesRepositories}
      />
    </Tab.Navigator>
  );
};
