import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
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
    <>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.button}
      >
        <Text style={styles.blue}>VER O REPOSITÓRIO</Text>
        <Ionicons color="#0366d6" name="link" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleFavorite}
        style={[
          styles.button,
          isFavorite ? styles.buttonActive : styles.buttonDesactive,
        ]}
      >
        <Text> {isFavorite ? "Desfavoritar" : "Favoritar"}</Text>!
        {!isFavorite ? (
          <Ionicons color="#000" name="star-outline" />
        ) : (
          <Ionicons color="#000" name="star" />
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonActive: {
    backgroundColor: "#FFD02C",
  },
  buttonDesactive: {
    backgroundColor: "#fff",
  },
  blue: {
    color: "#0366d6",
  },
});
