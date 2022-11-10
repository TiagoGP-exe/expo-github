import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

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

export const styles = StyleSheet.create({
  starCountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContent: {
    color: "#9A9A9A",
    fontSize: 12,
    marginLeft: 4,
  },
});
