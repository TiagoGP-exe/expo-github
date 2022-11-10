import { Route, useRoute } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonsDetails } from "../components/ButtonsDetails";
import { IRepoCard } from "../components/Card/CardRepo";
import { LanguageUsage } from "../components/Card/LanguageUsage";

export const DetailsRepository: FC = () => {
  const {
    params: { id, name, description, language, url },
  } = useRoute<Route<"DetailsRepository", IRepoCard>>();

  const [firstText, secondText] = name.split("/");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.cardHeaderText}>
          {firstText}/<Text style={styles.bold}>{secondText}</Text>
        </Text>

        <Text style={styles.description}>
          {description ?? "Nenhuma descrição encontrada"}
        </Text>

        <LanguageUsage language={language} />
      </View>

      <View style={styles.content}>
        <ButtonsDetails id={id} url={url} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F5",
    // alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderText: {
    fontSize: 18,
  },
  content: {
    backgroundColor: "#fff",
    padding: 16,
  },
  bold: {
    fontWeight: "bold",
  },
  cardHeaderTextBold: {
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 16,
  },
});
