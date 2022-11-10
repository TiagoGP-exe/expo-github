import React, { FC, ReactNode, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CardRepo, IRepoCard } from "../components/Card/CardRepo";
import { useRepo } from "../hooks/useRepo";

export interface IChildren {
  children?: ReactNode;
}

export function HomeScreen() {
  const { repos, setFavoriteById } = useRepo();
  const keyExtractor = useCallback(
    (_: IRepoCard, index: Number) => String(index),
    []
  );

  const rowRenderer = useCallback(
    ({ item }: { item: IRepoCard }) => (
      <CardRepo {...item} onPress={setFavoriteById} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={repos}
        renderItem={rowRenderer}
        keyExtractor={keyExtractor}
        CellRendererComponent={CellRenderer}
        style={styles.flatList}
      />
    </View>
  );
}

const CellRenderer: FC<IChildren> = ({ children }) => (
  <View style={styles.content}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F5",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  flatList: {
    marginTop: 16,
  },
});
