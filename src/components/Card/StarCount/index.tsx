import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface StarCountProps {
  count: number;
}

export function StarCount({ count }: StarCountProps) {
  return (
    <View style={styles.starCountContainer}>
      <Ionicons name="star" size={16} color="#FFD02C" />
      <Text style={styles.textContent}>{count}</Text>
    </View>
  );
}
