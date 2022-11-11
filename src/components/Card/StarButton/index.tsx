import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface StarButtonProps {
  onPress: () => void;
  isFavorite: boolean;
}

export function StarButton({ onPress, isFavorite }: StarButtonProps) {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.starButtonContainer, isFavorite ? styles.buttonDesactive : styles.buttonActive]}>
      {isFavorite ? <Ionicons name="star-outline" size={16} color="#000" /> : <Ionicons name="star" size={16} color="#FFD02C" />}

      <Text style={[styles.textContent, { color: isFavorite ? "#000" : "#FFD02C" }]}>{isFavorite ? "Desfavoritar" : "Favoritar"} </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  starButtonContainer: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },

  textContent: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
  buttonActive: {
    backgroundColor: "#FAF3DC",
  },
  buttonDesactive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
  },
});
