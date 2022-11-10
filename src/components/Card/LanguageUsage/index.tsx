import { View, Text, StyleSheet } from "react-native";

interface LanguageUsageProps {
  language: string;
  color?: string;
}

export function LanguageUsage({
  color = "#F22828",
  language,
}: LanguageUsageProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: color }]} />
      <Text style={styles.title}>{language}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  title: {
    color: "#9A9A9A",
    marginLeft: 8,
  },
});
