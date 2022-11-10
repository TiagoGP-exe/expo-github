import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

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
