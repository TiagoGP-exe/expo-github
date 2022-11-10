import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface StarButtonProps {
  onPress: () => void;
}

export function StarButton({ onPress }: StarButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.starButtonContainer}>
      <Ionicons name="star" size={16} color="#FFD02C" />
      <Text style={styles.textContent}>Favoritar</Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  starButtonContainer: {
    backgroundColor: "#FAF3DC",
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
  textContent: {
    color: "#FFD02C",
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
});
