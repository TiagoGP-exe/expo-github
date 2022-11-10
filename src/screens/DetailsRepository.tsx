import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonsDetails } from "../components/ButtonsDetails";
import { LanguageUsage } from "../components/Card/LanguageUsage";
import { useRepo } from "../hooks/useRepo";

export function DetailsRepository() {
  const [firstText, secondText] = name.split("/");
  const { favoriteRepos } = useRepo();

  return (
    <View style={styles.container}>
      <>
        <Text>
          {firstText}/<Text style={styles.cardHeaderText}>{secondText}</Text>
        </Text>

        <Text style={styles.description}>
          {description ?? "Nenhuma descrição encontrada"}
        </Text>

        <LanguageUsage language="" />
      </>
      <ButtonsDetails id={0} url="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F5",
    alignItems: "center",
  },
  cardHeaderText: {
    fontWeight: "bold",
  },
  description: {
    width: "100%",
    color: "#9A9A9A",
    fontSize: 12,
  },
  blue: {
    color: "#0366d6",
  },
});
