import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GithubUserForm } from "../components/GithubUserForm";
import { useBottomSheet } from "../hooks/useBottomSheet";
import FavoritesRepositories from "../screens/FavoritesRepositories";
import { HomeScreen } from "../screens/HomeScreen";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

export function StackRoutes() {
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
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "Repositórios",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="logo-github" size={size} color={color} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Favoritos"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
        component={FavoritesRepositories}
      />
    </Tab.Navigator>
  );
}
