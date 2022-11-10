import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRepo } from "../../hooks/useRepo";
import * as Linking from "expo-linking";

interface ButtonsDetailsProps {
  id: number;
  url: string;
}

export function ButtonsDetails({ id, url }: ButtonsDetailsProps) {
  const { favoriteRepos, removeFavoriteById, setFavoriteById } = useRepo();
  const isFavorite = favoriteRepos?.find((repo) => repo.id === id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteById(id);
    } else {
      setFavoriteById(id);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.button}
      >
        <Text style={styles.blue}>VER O REPOSITÓRIO</Text>
        <Ionicons color="#0366d6" name="link" size={16} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleFavorite}
        style={[
          styles.button,
          isFavorite ? styles.buttonDesactive : styles.buttonActive,
        ]}
      >
        <Text style={styles.textContent}>
          {isFavorite ? "DESFAVORITAR" : "FAVORITAR"}
        </Text>
        {!isFavorite ? (
          <Ionicons color="#000" name="star-outline" />
        ) : (
          <Ionicons color="#000" name="star" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 8,
  },
  buttonActive: {
    backgroundColor: "#FFD02C",
  },
  buttonDesactive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
  },
  blue: {
    color: "#0366d6",
    marginRight: 8,
    fontSize: 16,
  },
  textContent: {
    fontSize: 16,
    marginRight: 8,
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
